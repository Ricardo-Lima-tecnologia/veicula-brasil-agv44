$campaignId = "120246831588250069"
$token      = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
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
