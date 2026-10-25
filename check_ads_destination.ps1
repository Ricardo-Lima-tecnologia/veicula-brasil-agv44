$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
$base    = "https://graph.facebook.com/v20.0"

Write-Output "=== ANUNCIOS E URL DE DESTINO ==="
Write-Output ""

$ads = Invoke-RestMethod -Uri ($base + "/" + $adsetId + "/ads?fields=id,name,effective_status,creative{id,object_story_spec{link{call_to_action{value{website}}}}}&access_token=" + $token)

foreach ($ad in $ads.data) {
    Write-Output "----------------------------------------"
    Write-Output "Nome:           $($ad.name)"
    Write-Output "Status:         $($ad.effective_status)"
    
    if ($ad.creative.object_story_spec.link) {
        $link = $ad.creative.object_story_spec.link
        if ($link.call_to_action.value.website) {
            Write-Output "URL destino:    $($link.call_to_action.value.website)"
        } else {
            Write-Output "URL destino:    Nao definida"
        }
    } else {
        Write-Output "URL destino:    Nao encontrada"
    }
}
