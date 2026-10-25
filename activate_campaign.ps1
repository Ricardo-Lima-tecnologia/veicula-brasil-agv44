$campaignId = "120246831588250069"
$adsetId    = "120246833213070069"
$token      = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
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
