$t = "EAANKeJBFYEgBRsAaY33JZBIFVunkhrHTJHVA1t2UUEmkRGwirHq44fYfyfo3UsGKZCdUyuz65PHdXzXYkTntdhO7VQimzqzZAdF3gJtLmwwo1scL8wluCZB8SVPduwGUTGmjq9MB2itmRPmNwRLI4wajvIOCfh7n2Tmyc8IRBuFP70PXDPKY3fATAHIpG7ythCTtKYvv9BQuLkfnDqhf678MF5eNqrr7pjgiiztWmYtTowMxZCNfa36z6cbfQnErsFSLoX5kRNDsqkCM6jzNZBnXax"
$videoId  = "988618977245411"
$adsetId  = "120246833213070069"

# ── Verificar status do video ───────────────────────────────
Write-Output "=== Verificando status do video ==="
$vs = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$videoId`?fields=status&access_token=$t"
Write-Output "Status: $($vs.status | ConvertTo-Json)"

# ── Criativo 03 (Video) ─────────────────────────────────────
Write-Output "`n=== Criando Criativo 03 (Video) ==="
$spec3 = [uri]::EscapeDataString(@'
{
  "page_id": "1197572870106680",
  "video_data": {
    "video_id": "988618977245411",
    "message": "Seu veiculo merece protecao de verdade. Conheca os planos da Universo AGV e solicite uma cotacao gratuita agora pelo WhatsApp.",
    "title": "Protecao veicular completa para o seu veiculo",
    "link_description": "Fale com nossa equipe agora",
    "image_hash": "d3aaeac12dc6987b78401eed998fc8b3",
    "call_to_action": {
      "type": "WHATSAPP_MESSAGE",
      "value": {
        "app_destination": "WHATSAPP"
      }
    }
  }
}
'@)

$body3c = "name=CRIATIVO+03+%7C+VIDEO+AGV+TRUCK+9x16&object_story_spec=$spec3&access_token=$t"
try {
    $r3c = Invoke-RestMethod -Method POST `
           -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/adcreatives" `
           -Body $body3c `
           -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO Criativo 03: $($r3c | ConvertTo-Json)"
    $creative3Id = $r3c.id

    # ── Anuncio 03 ──────────────────────────────────────────
    Write-Output "`n=== Criando Anuncio 03 ==="
    $creative3 = [uri]::EscapeDataString("{`"creative_id`":`"$creative3Id`"}")
    $body3a = "name=CRIATIVO+03+%7C+VIDEO+AGV+TRUCK+9x16&adset_id=$adsetId&creative=$creative3&status=PAUSED&access_token=$t"
    $r3a = Invoke-RestMethod -Method POST `
           -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/ads" `
           -Body $body3a `
           -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO Ad 03: $($r3a | ConvertTo-Json)"
} catch {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    Write-Output "ERRO DETALHADO: $($reader.ReadToEnd())"
}
