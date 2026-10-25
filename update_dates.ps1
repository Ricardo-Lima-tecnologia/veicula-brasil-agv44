$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
$base    = "https://graph.facebook.com/v20.0"

# Termino: 05/08/2026 23:59 Brasilia = 06/08/2026 02:59 UTC
$endTime   = "2026-08-06T02:59:59+0000"

$body = "end_time=" + [uri]::EscapeDataString($endTime) + "&access_token=" + $token

try {
    $r = Invoke-RestMethod -Method POST -Uri "$base/$adsetId" -Body $body -ContentType "application/x-www-form-urlencoded" -ErrorAction Stop
    Write-Output "SUCESSO: $($r | ConvertTo-Json -Compress)"
} catch {
    $err = $_.ErrorDetails.Message
    if (-not $err) { $err = $_.Exception.Message }
    Write-Output "ERRO: $err"
}

# Confirmar
Write-Output ""
Write-Output "=== Confirmando datas ==="
$url = $base + "/" + $adsetId + "?fields=name,start_time,end_time&access_token=" + $token
$c = Invoke-RestMethod -Uri $url
Write-Output "Nome:      $($c.name)"
Write-Output "Inicio:    $($c.start_time)"
Write-Output "Termino:   $($c.end_time)"
