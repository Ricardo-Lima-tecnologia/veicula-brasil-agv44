$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
$base    = "https://graph.facebook.com/v20.0"

# R$50/dia = 5000 centavos
$dailyBudget = 5000

$body = "daily_budget=$dailyBudget&access_token=$token"

try {
    $r = Invoke-RestMethod -Method POST -Uri "$base/$adsetId" -Body $body -ContentType "application/x-www-form-urlencoded" -ErrorAction Stop
    Write-Output "SUCESSO: Budget atualizado para R$50/dia"
} catch {
    $err = $_.ErrorDetails.Message
    if (-not $err) { $err = $_.Exception.Message }
    Write-Output "ERRO: $err"
}

# Confirmar
Write-Output ""
Write-Output "=== Confirmando budget ==="
$url = $base + "/" + $adsetId + "?fields=name,daily_budget&access_token=" + $token
$c = Invoke-RestMethod -Uri $url
Write-Output "Nome:      $($c.name)"
Write-Output "Budget:    R$ $([int]$c.daily_budget / 100)/dia"
