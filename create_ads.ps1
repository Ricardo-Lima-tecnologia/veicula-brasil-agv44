$t = "EAANKeJBFYEgBRm8CTqKqEnfme3p3Hi8qzZAGWkpb4LSi5Us5uSEkJTcTN2VUcCYzZB0pV8sZAZCigW5DAhh7jI3piJuKerTZCNAx0RWC0pirxAfZCl4AG5xvnyG0ZAGUnKYzZCneKnTMUXx2mJmDth8zKov5vy8WCTGGEqZCOoM3f1O3v5rsHN9yb636LfEJckZBNAbSULSBH1WzZCa4gvzuKhoB5NvCsMhFjeAYJKQY8a6rMZC3Ko1n9UR88DFbER64IOoHAEql4zUcpawyNgRs8E1Hsba3"
$adsetId = "120246833213070069"

# ── ANUNCIO 01 ─────────────────────────────────────────────
Write-Output "=== Criando Anuncio 01 ==="
$creative1 = [uri]::EscapeDataString('{"creative_id":"1674219670555877"}')
$body1 = "name=CRIATIVO+01+%7C+PROTECAO+VEICULAR+%7C+BANNER&adset_id=$adsetId&creative=$creative1&status=PAUSED&access_token=$t"
try {
    $r = Invoke-WebRequest -Method POST -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/ads" -Body $body1 -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO Ad 01: $($r.Content)"
} catch {
    Write-Output "ERRO Ad 01: $($_.ErrorDetails.Message)"
}

# ── CRIATIVO 02 ────────────────────────────────────────────
Write-Output "`n=== Criando Criativo 02 ==="
$spec2 = [uri]::EscapeDataString(@'
{
  "page_id": "1197572870106680",
  "link_data": {
    "message": "Dirija com mais tranquilidade. Fale com a equipe da Universo AGV e solicite uma cotação de proteção veicular sem compromisso.",
    "name": "Faça sua cotação pelo WhatsApp",
    "description": "Atendimento rápido e humanizado",
    "image_hash": "d3aaeac12dc6987b78401eed998fc8b3",
    "link": "https://wa.me/5561998571690",
    "call_to_action": {
      "type": "WHATSAPP_MESSAGE",
      "value": {
        "app_destination": "WHATSAPP"
      }
    }
  }
}
'@)
$body2c = "name=CRIATIVO+02+%7C+COTACAO+WHATSAPP+%7C+BANNER&object_story_spec=$spec2&access_token=$t"
try {
    $r2c = Invoke-WebRequest -Method POST -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/adcreatives" -Body $body2c -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO Criativo 02: $($r2c.Content)"
    $creative2Id = ($r2c.Content | ConvertFrom-Json).id

    # ── ANUNCIO 02 ─────────────────────────────────────────
    Write-Output "`n=== Criando Anuncio 02 ==="
    $creative2 = [uri]::EscapeDataString("{`"creative_id`":`"$creative2Id`"}")
    $body2a = "name=CRIATIVO+02+%7C+COTACAO+WHATSAPP+%7C+BANNER&adset_id=$adsetId&creative=$creative2&status=PAUSED&access_token=$t"
    $r2a = Invoke-WebRequest -Method POST -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/ads" -Body $body2a -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO Ad 02: $($r2a.Content)"
} catch {
    Write-Output "ERRO Criativo/Ad 02: $($_.ErrorDetails.Message)"
}
