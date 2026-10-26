import urllib.request, urllib.parse, json

token = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
base = "https://graph.facebook.com/v20.0"
campaignId = "120246831588250069"
adsetId    = "120246833213070069"

def get(url):
    res = urllib.request.urlopen(url).read()
    return json.loads(res)

print("=" * 55)
print("  AUDITORIA COMPLETA - LEADS | WHATSAPP | UNIVERSO AGV")
print("=" * 55)

# 1. Campanha
c = get(base + "/" + campaignId + "?fields=name,status,effective_status,objective&access_token=" + token)
print("\n[1] CAMPANHA")
print("  Nome:      " + c["name"])
print("  Status:    " + c["status"])
print("  Objetivo:  " + c["objective"])

# 2. Conjunto
a = get(base + "/" + adsetId + "?fields=name,status,effective_status,daily_budget,end_time,optimization_goal,billing_event&access_token=" + token)
print("\n[2] CONJUNTO DE ANUNCIOS")
print("  Nome:              " + a["name"])
print("  Status:            " + a["status"] + " | Efetivo: " + a["effective_status"])
print("  Budget diario:     R$ " + str(int(a["daily_budget"]) / 100) + "/dia")
print("  Termino:           " + a.get("end_time", "sem termino"))
print("  Otimizacao:        " + a.get("optimization_goal", "nao definido"))
print("  Cobranca por:      " + a.get("billing_event", "nao definido"))

# 3. Insights com conversas
print("\n[3] METRICAS DE CONVERSAS (desde inicio)")
fields = "impressions,reach,clicks,spend,actions,cost_per_action_type"
ins = get(base + "/" + campaignId + "/insights?fields=" + urllib.parse.quote(fields) + "&date_preset=maximum&access_token=" + token)
if ins.get("data"):
    d = ins["data"][0]
    print("  Impressoes:  " + d.get("impressions", "0"))
    print("  Alcance:     " + d.get("reach", "0"))
    print("  Cliques:     " + d.get("clicks", "0"))
    print("  Gasto:       R$ " + d.get("spend", "0"))
    actions = d.get("actions", [])
    cpas = d.get("cost_per_action_type", [])
    print("\n  Acoes rastreadas:")
    if actions:
        for ac in actions:
            cpa = next((x["value"] for x in cpas if x["action_type"] == ac["action_type"]), "-")
            print("    " + ac["action_type"] + ": " + ac["value"] + "  |  Custo: R$ " + cpa)
    else:
        print("    Nenhuma acao rastreada")
else:
    print("  Sem dados de insights")

# 4. Por anuncio
print("\n[4] CONVERSAS POR ANUNCIO")
ads_data = get(base + "/" + adsetId + "/ads?fields=id,name,effective_status&access_token=" + token)
for ad in ads_data["data"]:
    adIns = get(base + "/" + ad["id"] + "/insights?fields=impressions,spend,actions&date_preset=maximum&access_token=" + token)
    print("\n  " + ad["name"])
    print("  Status: " + ad["effective_status"])
    if adIns.get("data"):
        di = adIns["data"][0]
        print("  Impressoes: " + di.get("impressions", "0") + " | Gasto: R$ " + di.get("spend", "0"))
        for ac in di.get("actions", []):
            print("  Acao: " + ac["action_type"] + " = " + ac["value"])
    else:
        print("  Sem dados ainda")

print("\n" + "=" * 55)
print("  FIM DA AUDITORIA")
print("=" * 55)
