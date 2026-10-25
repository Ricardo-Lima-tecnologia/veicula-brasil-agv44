$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
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
