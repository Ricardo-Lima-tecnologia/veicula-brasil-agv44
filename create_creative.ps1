$t = "EAANKeJBFYEgBRm8CTqKqEnfme3p3Hi8qzZAGWkpb4LSi5Us5uSEkJTcTN2VUcCYzZB0pV8sZAZCigW5DAhh7jI3piJuKerTZCNAx0RWC0pirxAfZCl4AG5xvnyG0ZAGUnKYzZCneKnTMUXx2mJmDth8zKov5vy8WCTGGEqZCOoM3f1O3v5rsHN9yb636LfEJckZBNAbSULSBH1WzZCa4gvzuKhoB5NvCsMhFjeAYJKQY8a6rMZC3Ko1n9UR88DFbER64IOoHAEql4zUcpawyNgRs8E1Hsba3"

$spec = [uri]::EscapeDataString(@'
{
  "page_id": "1197572870106680",
  "link_data": {
    "message": "Proteja seu veículo contra imprevistos. Conheça a proteção veicular da Universo AGV e solicite sua cotação pelo WhatsApp.",
    "name": "Proteção veicular para o seu carro",
    "description": "Atendimento pelo WhatsApp",
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

$body = "name=CRIATIVO+01+%7C+PROTECAO+VEICULAR+%7C+BANNER" +
        "&object_story_spec=$spec" +
        "&access_token=$t"

try {
    $r = Invoke-WebRequest -Method POST `
         -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/adcreatives" `
         -Body $body `
         -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO CRIATIVO 01:"
    Write-Output $r.Content
} catch {
    Write-Output "ERRO: $($_.Exception.Response.StatusCode)"
    Write-Output $_.ErrorDetails.Message
}
