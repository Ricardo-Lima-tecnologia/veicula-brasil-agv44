import urllib.request, urllib.parse, json

token = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
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
