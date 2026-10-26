$campaignId = "120246831588250069"
$token      = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
$base       = "https://graph.facebook.com/v20.0"

Write-Output "=== CONJUNTOS DE ANUNCIOS DA CAMPANHA ==="
Write-Output ""

$adsets = Invoke-RestMethod -Uri ($base + "/" + $campaignId + "/adsets?fields=id,name,status,daily_budget,lifetime_budget,end_time&access_token=" + $token)

Write-Output "Total de conjuntos: $($adsets.data.Count)"
Write-Output ""

$totalBudget = 0

foreach ($adset in $adsets.data) {
    $budget = if ($adset.daily_budget) { [int]$adset.daily_budget / 100 } else { 0 }
    $totalBudget += $budget
    
    Write-Output "----------------------------------------"
    Write-Output "Nome:           $($adset.name)"
    Write-Output "ID:             $($adset.id)"
    Write-Output "Status:         $($adset.status)"
    Write-Output "Budget diario:  R$ $budget/dia"
    if ($adset.lifetime_budget) {
        Write-Output "Budget total:   R$ $([int]$adset.lifetime_budget / 100)"
    }
    if ($adset.end_time) {
        Write-Output "Termino:        $($adset.end_time)"
    }
}

Write-Output ""
Write-Output "========================================"
Write-Output "TOTAL DE GASTO DIARIO: R$ $totalBudget/dia"
Write-Output "========================================"
