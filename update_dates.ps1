$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
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
