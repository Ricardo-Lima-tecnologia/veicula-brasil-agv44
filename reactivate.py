import urllib.request, urllib.parse, json

token = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
base = "https://graph.facebook.com/v20.0"
adsetId = "120246833213070069"

# Reativar conjunto
data = urllib.parse.urlencode({"status": "ACTIVE", "access_token": token}).encode()
req = urllib.request.Request(base + "/" + adsetId, data=data, method="POST")
res = urllib.request.urlopen(req).read()
print("Reativar conjunto: " + res.decode())

# Confirmar status
url = base + "/" + adsetId + "?fields=name,status,effective_status,daily_budget&access_token=" + token
res2 = urllib.request.urlopen(url).read()
d = json.loads(res2)
budget = int(d.get("daily_budget", 0)) / 100
print("Nome:     " + d.get("name", ""))
print("Status:   " + d.get("status", ""))
print("Efetivo:  " + d.get("effective_status", ""))
print("Budget:   R$ " + str(budget) + "/dia")
