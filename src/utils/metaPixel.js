function generateEventId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function track(eventName, params = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  const eventId = generateEventId();
  window.fbq("track", eventName, params, { eventID: eventId });
}

export const pixelEvents = {
  pageView() {
    track("PageView");
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

  lead(data = {}) {
    track("Lead", {
      content_name: data.content_name || "Cotação Proteção Veicular",
      content_category: "Proteção Veicular",
      currency: "BRL",
      ...data,
    });
  },
};
