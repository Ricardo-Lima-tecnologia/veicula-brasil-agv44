$pixelId   = "856498283734790"
$capiToken = "EAANz2YiFee4BRkJAkOZABZCSwxtY7BNHrVCNwZA4rNzc7QIyi1iaPz5SrbYkYknVi0Xfe02oubFQ9dZBWoefPdiVnZAx4BwPuP1UFEdFonf770JSCOnlXMTy6owycQmLsA6eGGoZAQER164bUmnRX1hpIu8Dspt729zZBT0uwFZB4WxekgsFbxWtZCjZCF2QZBoJ1ZAWugZDZD"

function Call-Api($uri, $method = "GET", $body = $null, $ct = $null) {
    $params = @{ Uri = $uri; Method = $method; ErrorAction = "Stop" }
    if ($body) { $params["Body"] = $body; $params["ContentType"] = $ct }
    try {
        return Invoke-RestMethod @params
    } catch {
        $msg = $_.ErrorDetails.Message
        if (-not $msg) { try { $s = $_.Exception.Response.GetResponseStream(); $msg = (New-Object System.IO.StreamReader($s)).ReadToEnd() } catch {} }
        if (-not $msg) { $msg = $_.Exception.Message }
        return "ERRO: $msg"
    }
}

# ── 1. Verificar token ────────────────────────────────────
Write-Output "=== 1. Verificando token CAPI ==="
$r1 = Call-Api "https://graph.facebook.com/v20.0/debug_token?input_token=$capiToken&access_token=$capiToken"
if ($r1 -is [string]) { Write-Output $r1 } else {
    $d = $r1.data
    Write-Output "Valido:    $($d.is_valid)"
    Write-Output "Tipo:      $($d.type)"
    Write-Output "App ID:    $($d.app_id)"
    Write-Output "Expira:    $(if ($d.expires_at -eq 0) { 'Nunca (longo prazo)' } else { [DateTimeOffset]::FromUnixTimeSeconds($d.expires_at).ToString('dd/MM/yyyy HH:mm') })"
    Write-Output "Permissoes: $($d.scopes -join ', ')"
}

# ── 2. Enviar evento de teste ao CAPI ────────────────────
Write-Output "`n=== 2. Enviando evento de TESTE ao CAPI ==="
$eventTime = [int64]([datetime]::UtcNow - [datetime]"1970-01-01").TotalSeconds
$payload = [ordered]@{
    data = @(
        [ordered]@{
            event_name       = "PageView"
            event_time       = $eventTime
            event_id         = "test-$((Get-Date).Ticks)"
            event_source_url = "https://veiculabrasilagv.com.br/"
            action_source    = "website"
            user_data        = [ordered]@{
                client_ip_address = "177.0.0.1"
                client_user_agent = "Mozilla/5.0 (Windows NT 10.0) Test"
            }
        }
    )
} | ConvertTo-Json -Depth 6

$r2 = Call-Api "https://graph.facebook.com/v20.0/$pixelId/events?access_token=$capiToken" "POST" $payload "application/json"
if ($r2 -is [string]) { Write-Output $r2 } else { Write-Output "Resposta: $($r2 | ConvertTo-Json -Compress)" }

# ── 3. Verificar pixel ───────────────────────────────────
Write-Output "`n=== 3. Verificando pixel ==="
$r3 = Call-Api "https://graph.facebook.com/v20.0/$pixelId`?fields=name,last_fired_time,is_unavailable&access_token=$capiToken"
if ($r3 -is [string]) { Write-Output $r3 } else {
    Write-Output "Nome:           $($r3.name)"
    $lft = if ($r3.last_fired_time) { [DateTimeOffset]::FromUnixTimeSeconds($r3.last_fired_time).ToLocalTime().ToString("dd/MM/yyyy HH:mm") } else { "Sem registro" }
    Write-Output "Ultimo disparo: $lft"
    Write-Output "Indisponivel:   $($r3.is_unavailable)"
}
