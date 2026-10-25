import urllib.request, urllib.parse, json

token = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
base = "https://graph.facebook.com/v20.0"

ads = {
    "CRIATIVO 01 | PROTECAO VEICULAR | BANNER": "120246833413660069",
    "CRIATIVO 02 | COTACAO WHATSAPP | BANNER":   "120246833414760069",
    "CRIATIVO 03 | VIDEO AGV TRUCK 9x16":         "120246834141110069",
}

print("=" * 50)
print("  DESTINO DOS CRIATIVOS")
print("=" * 50)

for nome, adId in ads.items():
    fields = "id,name,effective_status,creative{id,name,object_story_spec}"
    url = base + "/" + adId + "?fields=" + urllib.parse.quote(fields) + "&access_token=" + token
    try:
        res = urllib.request.urlopen(url).read()
        d = json.loads(res)
        print("\n--- " + nome + " ---")
        print("Status efetivo: " + d.get("effective_status", ""))
        spec = d.get("creative", {}).get("object_story_spec", {})
        link_data = spec.get("link_data", {})
        video_data = spec.get("video_data", {})

        if link_data:
            link = link_data.get("link", "nao definido")
            cta  = link_data.get("call_to_action", {}).get("type", "nao definido")
            print("Link destino:   " + link)
            print("CTA:            " + cta)
        elif video_data:
            cta  = video_data.get("call_to_action", {}).get("type", "nao definido")
            dest = video_data.get("call_to_action", {}).get("value", {})
            print("Tipo:           VIDEO")
            print("CTA:            " + cta)
            print("Destino:        " + json.dumps(dest))
        else:
            print("Spec:           " + json.dumps(spec)[:200])
    except Exception as e:
        print("ERRO: " + str(e))

print("\n" + "=" * 50)
