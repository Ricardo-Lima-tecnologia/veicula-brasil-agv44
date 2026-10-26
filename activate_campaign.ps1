$campaignId = "120246831588250069"
$adsetId    = "120246833213070069"
$token      = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
$base       = "https://graph.facebook.com/v20.0"

Write-Output "=== ATIVANDO CAMPANHA ==="

# Ativar campanha
$body1 = "status=ACTIVE&access_token=$token"
try {
    $r1 = Invoke-RestMethod -Method POST -Uri "$base/$campaignId" -Body $body1 -ContentType "application/x-www-form-urlencoded" -ErrorAction Stop
    Write-Output "Campanha: SUCESSO"
} catch {
    Write-Output "Campanha: ERRO - $($_.ErrorDetails.Message)"
}

# Ativar conjunto de anuncios
$body2 = "status=ACTIVE&access_token=$token"
try {
    $r2 = Invoke-RestMethod -Method POST -Uri "$base/$adsetId" -Body $body2 -ContentType "application/x-www-form-urlencoded" -ErrorAction Stop
    Write-Output "Conjunto: SUCESSO"
} catch {
    Write-Output "Conjunto: ERRO - $($_.ErrorDetails.Message)"
}

Write-Output ""
Write-Output "=== CONFIRMANDO STATUS ==="

$c = Invoke-RestMethod -Uri "$base/$campaignId?fields=name,status,effective_status&access_token=$token"
Write-Output "Campanha: $($c.name) | Status: $($c.status) | Efetivo: $($c.effective_status)"

$a = Invoke-RestMethod -Uri "$base/$adsetId?fields=name,status,effective_status,daily_budget,end_time&access_token=$token"
Write-Output "Conjunto:  $($a.name) | Status: $($a.status) | Efetivo: $($a.effective_status)"
Write-Output "Budget:    R$ $([int]$a.daily_budget / 100)/dia"
