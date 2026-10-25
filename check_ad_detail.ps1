$adId = "120246833414760069"
$token   = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
$base    = "https://graph.facebook.com/v20.0"

Write-Output "=== ANUNCIO INDIVIDUAL ==="
Write-Output ""

$ad = Invoke-RestMethod -Uri ($base + "/" + $adId + "?fields=id,name,effective_status,creative{id,name,object_story_spec}&access_token=" + $token)

Write-Output "Nome:           $($ad.name)"
Write-Output "Status:         $($ad.effective_status)"
Write-Output "Creative ID:    $($ad.creative.id)"
Write-Output "Creative Nome:  $($ad.creative.name)"

if ($ad.creative.object_story_spec) {
    $spec = $ad.creative.object_story_spec | ConvertTo-Json -Depth 10
    Write-Output ""
    Write-Output "=== OBJECT STORY SPEC ==="
    Write-Output $spec
}
