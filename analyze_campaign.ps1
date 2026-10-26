$campaignId = "120246831588250069"
$adsetId    = "120246833213070069"
$token      = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
$base       = "https://graph.facebook.com/v20.0"

Write-Output "========================================"
Write-Output "   AVALIACAO DA CAMPANHA - $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
Write-Output "========================================"
Write-Output ""

# --- 1. Status da campanha ---
Write-Output "--- CAMPANHA ---"
$c = Invoke-RestMethod -Uri ($base + "/" + $campaignId + "?fields=name,status,effective_status,objective&access_token=" + $token)
Write-Output "Nome:           $($c.name)"
Write-Output "Status:         $($c.status)"
Write-Output "Objetivo:       $($c.objective)"
Write-Output ""

# --- 2. Status do conjunto ---
Write-Output "--- CONJUNTO DE ANUNCIOS ---"
$a = Invoke-RestMethod -Uri ($base + "/" + $adsetId + "?fields=name,status,effective_status,daily_budget,end_time&access_token=" + $token)
Write-Output "Nome:           $($a.name)"
Write-Output "Status:         $($a.status) | Efetivo: $($a.effective_status)"
Write-Output "Budget diario:  R$ $([int]$a.daily_budget / 100)/dia"
Write-Output "Termino:        $(if ($a.end_time) { $a.end_time } else { 'Sem data de termino' })"
Write-Output ""

# --- 3. Status dos anuncios ---
Write-Output "--- ANUNCIOS ---"
$ads = Invoke-RestMethod -Uri ($base + "/" + $adsetId + "/ads?fields=id,name,status,effective_status&access_token=" + $token)
foreach ($ad in $ads.data) {
    Write-Output "$($ad.name)"
    Write-Output "  Status: $($ad.status) | Efetivo: $($ad.effective_status)"
}
Write-Output ""

# --- 4. Insights totais da campanha (desde o inicio) ---
Write-Output "--- RESULTADOS TOTAIS (DESDE INICIO) ---"
$insFields = "impressions,clicks,spend,cpc,ctr,reach,frequency"
try {
    $i = Invoke-RestMethod -Uri ($base + "/" + $campaignId + "/insights?fields=" + $insFields + "&date_preset=maximum&access_token=" + $token)
    if ($i.data.Count -gt 0) {
        $d = $i.data[0]
        Write-Output "Periodo:         $($d.date_start) a $($d.date_stop)"
        Write-Output "Alcance:         $($d.reach) pessoas"
        Write-Output "Impressoes:      $($d.impressions)"
        Write-Output "Frequencia:      $([math]::Round([double]$d.frequency, 2))x por pessoa"
        Write-Output "Cliques:         $($d.clicks)"
        Write-Output "CTR:             $([math]::Round([double]$d.ctr, 2))%"
        Write-Output "Gasto total:     R$ $([math]::Round([double]$d.spend, 2))"
        Write-Output "CPC medio:       R$ $([math]::Round([double]$d.cpc, 2))"
    } else {
        Write-Output "Sem dados de insights."
    }
} catch {
    Write-Output "ERRO insights: $($_.ErrorDetails.Message)"
}
Write-Output ""

# --- 5. Insights por anuncio (para ver qual performa melhor) ---
Write-Output "--- DESEMPENHO POR ANUNCIO ---"
try {
    $ai = Invoke-RestMethod -Uri ($base + "/" + $adsetId + "/ads?fields=name,insights{impressions,clicks,spend,ctr}&access_token=" + $token)
    foreach ($ad in $ai.data) {
        Write-Output "$($ad.name)"
        if ($ad.insights) {
            $ins = $ad.insights.data[0]
            Write-Output "  Impressoes: $($ins.impressions) | Cliques: $($ins.clicks) | Gasto: R$ $([math]::Round([double]$ins.spend,2)) | CTR: $([math]::Round([double]$ins.ctr,2))%"
        } else {
            Write-Output "  Sem dados ainda"
        }
    }
} catch {
    Write-Output "ERRO por anuncio: $($_.ErrorDetails.Message)"
}
