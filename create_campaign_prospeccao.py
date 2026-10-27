import json
import os
import urllib.error
import urllib.parse
import urllib.request

TOKEN = os.environ["META_TOKEN"]
BASE = "https://graph.facebook.com/v20.0"
ACCOUNT = "act_1882944529367758"
PAGE_ID = "1375217829010512"
DF_REGION_KEY = "444"
BUDGET_PER_ADSET = 2500  # centavos: R$25/dia por conjunto = R$50/dia total

INTERESTS = [
    {"id": "6003176678152", "name": "Automóveis (veículos)"},
    {"id": "6003488503154", "name": "Veículo motorizado (veículo)"},
    {"id": "6003633149383", "name": "Seguro de veículo"},
    {"id": "6003375314975", "name": "Manutenção de veículos (veículos)"},
    {"id": "6003090593301", "name": "Oficina automotiva (veículos)"},
    {"id": "6003144341584", "name": "Volkswagen (veículo)"},
    {"id": "6003093132817", "name": "Chevrolet"},
    {"id": "6003342603828", "name": "FIAT"},
    {"id": "6003481743064", "name": "Toyota (veículos)"},
    {"id": "6003196950924", "name": "Honda (veículos)"},
]


def post(path, params):
    params = {k: json.dumps(v) if isinstance(v, (dict, list)) else v for k, v in params.items()}
    params["access_token"] = TOKEN
    req = urllib.request.Request(f"{BASE}/{path}", data=urllib.parse.urlencode(params).encode(), method="POST")
    try:
        return json.loads(urllib.request.urlopen(req).read())
    except urllib.error.HTTPError as e:
        raise SystemExit(f"ERRO em {path}: {e.read().decode()}")


def base_targeting():
    return {
        "geo_locations": {"regions": [{"key": DF_REGION_KEY}], "location_types": ["home", "recent"]},
        "age_min": 25,
        "age_max": 55,
    }


if os.environ.get("CAMPAIGN_ID"):
    campaign = {"id": os.environ["CAMPAIGN_ID"]}
    print("Usando campanha existente:", campaign["id"])
else:
    campaign = post(f"{ACCOUNT}/campaigns", {
        "name": "[CL] AGV | VENDAS | WHATSAPP | PROSPECÇÃO",
        "objective": "OUTCOME_ENGAGEMENT",
        "status": "PAUSED",
        "special_ad_categories": [],
        "is_adset_budget_sharing_enabled": "false",
    })
    print("Campanha criada:", campaign["id"])

adset_common = {
    "campaign_id": campaign["id"],
    "daily_budget": BUDGET_PER_ADSET,
    "billing_event": "IMPRESSIONS",
    "optimization_goal": "CONVERSATIONS",
    "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
    "destination_type": "WHATSAPP",
    "promoted_object": {"page_id": PAGE_ID},
    "status": "PAUSED",
}

amplo = post(f"{ACCOUNT}/adsets", {
    **adset_common,
    "name": "CJ01 | PÚBLICO AMPLO | DF | 25-55",
    "targeting": {**base_targeting(), "targeting_automation": {"advantage_audience": 1}},
})
print("Conjunto 01 (Amplo) criado:", amplo["id"])

interesses = post(f"{ACCOUNT}/adsets", {
    **adset_common,
    "name": "CJ02 | INTERESSES AUTOMOTIVOS | DF | 25-55",
    "targeting": {
        **base_targeting(),
        "flexible_spec": [{"interests": INTERESTS}],
        "targeting_automation": {"advantage_audience": 0},
    },
})
print("Conjunto 02 (Interesses) criado:", interesses["id"])
