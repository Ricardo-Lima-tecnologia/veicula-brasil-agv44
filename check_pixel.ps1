$pixelId = "856498283734790"
$token   = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
$base    = "https://graph.facebook.com/v20.0"

Write-Output "=== STATUS DO PIXEL ==="

# Dados do pixel
$p = Invoke-RestMethod -Uri "$base/$pixelId?fields=name,last_fired_time,is_unavailable&access_token=$token"
Write-Output "Nome:           $($p.name)"
if ($p.last_fired_time) {
    $lft = [DateTimeOffset]::FromUnixTimeSeconds($p.last_fired_time).ToLocalTime().ToString("dd/MM/yyyy HH:mm")
    Write-Output "Ultimo disparo: $lft"
} else {
    Write-Output "Ultimo disparo: Sem registro"
}
Write-Output "Indisponivel:   $($p.is_unavailable)"

Write-Output ""
Write-Output "=== EVENTOS NAS ULTIMAS 24H ==="

# Eventos nas ultimas 24h
$since = [int64]([datetime]::UtcNow.AddHours(-24) - [datetime]"1970-01-01").TotalSeconds
$until = [int64]([datetime]::UtcNow - [datetime]"1970-01-01").TotalSeconds

$e = Invoke-RestMethod -Uri "$base/$pixelId/events?fields=event_name,event_time&access_token=$token"

$events = $e.data | Where-Object { $_.event_time -ge $since -and $_.event_time -le $until }

Write-Output "Total de eventos: $($events.Count)"

if ($events.Count -gt 0) {
    $grouped = $events | Group-Object event_name | Sort-Object Count -Descending
    foreach ($g in $grouped) {
        Write-Output "  $($g.Name): $($g.Count)"
    }
} else {
    Write-Output "  Nenhum evento nas ultimas 24h"
}
