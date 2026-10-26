import urllib.request, urllib.parse, json

token = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
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
