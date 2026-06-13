$t        = "EAANKeJBFYEgBRsAaY33JZBIFVunkhrHTJHVA1t2UUEmkRGwirHq44fYfyfo3UsGKZCdUyuz65PHdXzXYkTntdhO7VQimzqzZAdF3gJtLmwwo1scL8wluCZB8SVPduwGUTGmjq9MB2itmRPmNwRLI4wajvIOCfh7n2Tmyc8IRBuFP70PXDPKY3fATAHIpG7ythCTtKYvv9BQuLkfnDqhf678MF5eNqrr7pjgiiztWmYtTowMxZCNfa36z6cbfQnErsFSLoX5kRNDsqkCM6jzNZBnXax"
$campaignId = "120246831588250069"
$adsetId    = "120246833213070069"
$ad1        = "120246833413660069"
$ad2        = "120246833414760069"
$ad3        = "120246834141110069"

# Início amanhã às 00:00 BRT = 03:00 UTC
$startTime = "2026-06-14T03:00:00+0000"

# Targeting: todo o Brasil
$targeting = [uri]::EscapeDataString('{"geo_locations":{"countries":["BR"]},"age_min":18,"age_max":65}')

function Patch($url, $body) {
    try {
        $r = Invoke-RestMethod -Method POST -Uri $url -Body $body -ContentType "application/x-www-form-urlencoded"
        return "OK: $($r | ConvertTo-Json -Compress)"
    } catch {
        $s = $_.Exception.Response.GetResponseStream()
        $rd = New-Object System.IO.StreamReader($s)
        return "ERRO: $($rd.ReadToEnd())"
    }
}

# ── 1. Atualizar Conjunto de Anúncios ──────────────────────
Write-Output "=== 1. Atualizando Conjunto de Anuncios ==="
$b = "daily_budget=4000&targeting=$targeting&start_time=$startTime&status=ACTIVE&access_token=$t"
Write-Output (Patch "https://graph.facebook.com/v21.0/$adsetId" $b)

# ── 2. Ativar Campanha ──────────────────────────────────────
Write-Output "`n=== 2. Ativando Campanha ==="
Write-Output (Patch "https://graph.facebook.com/v21.0/$campaignId" "status=ACTIVE&access_token=$t")

# ── 3. Ativar Anuncio 01 ────────────────────────────────────
Write-Output "`n=== 3. Ativando Anuncio 01 ==="
Write-Output (Patch "https://graph.facebook.com/v21.0/$ad1" "status=ACTIVE&access_token=$t")

# ── 4. Ativar Anuncio 02 ────────────────────────────────────
Write-Output "`n=== 4. Ativando Anuncio 02 ==="
Write-Output (Patch "https://graph.facebook.com/v21.0/$ad2" "status=ACTIVE&access_token=$t")

# ── 5. Ativar Anuncio 03 ────────────────────────────────────
Write-Output "`n=== 5. Ativando Anuncio 03 ==="
Write-Output (Patch "https://graph.facebook.com/v21.0/$ad3" "status=ACTIVE&access_token=$t")

Write-Output "`n=== CONCLUIDO ==="
