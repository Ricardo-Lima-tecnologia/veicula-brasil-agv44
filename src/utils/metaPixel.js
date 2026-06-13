function generateEventId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

async function sha256(str) {
  if (!str) return undefined;
  const normalized = str.toLowerCase().trim();
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(normalized)
  );
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function trackBrowser(eventName, params = {}, eventId) {
  if (typeof window === "undefined" || typeof (/** @type {any} */ (window)).fbq !== "function") return;
  /** @type {any} */ (window).fbq("track", eventName, params, { eventID: eventId });
}

async function trackCAPI(eventName, eventId, userData = {}, customData = {}) {
  try {
    await fetch("/.netlify/functions/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        userData,
        customData,
        eventSourceUrl: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
  } catch (_) {
  }
}

async function track(eventName, params = {}, userData = {}) {
  const eventId = generateEventId();
  trackBrowser(eventName, params, eventId);
  await trackCAPI(eventName, eventId, userData, params);
}

export const pixelEvents = {
  pageView() {
    const eventId = generateEventId();
    trackBrowser("PageView", {}, eventId);
    trackCAPI("PageView", eventId);
  },

  viewContent(data = {}) {
    track("ViewContent", {
      content_name: data.content_name || "Landing Page Proteção Veicular",
      content_category: data.content_category || "Proteção Veicular",
      content_type: "product",
      currency: "BRL",
      ...data,
    });
  },

  contact(data = {}) {
    track("Contact", {
      content_name: data.content_name || "WhatsApp Click",
      ...data,
    });
  },

  async lead(data = {}, userInfo = {}) {
    const eventId = generateEventId();
    const params = {
      content_name: data.content_name || "Cotação Proteção Veicular",
      content_category: "Proteção Veicular",
      currency: "BRL",
      ...data,
    };

    const userData = {};
    if (userInfo.email) userData.em = [await sha256(userInfo.email)];
    if (userInfo.phone) userData.ph = [await sha256(normalizePhone(userInfo.phone))];

    trackBrowser("Lead", params, eventId);
    await trackCAPI("Lead", eventId, userData, params);
  },
};
