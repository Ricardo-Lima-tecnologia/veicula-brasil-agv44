$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
$base    = "https://graph.facebook.com/v20.0"

Write-Output "=== CREATIVOS ==="
Write-Output ""

$creatives = Invoke-RestMethod -Uri ($base + "/" + $adsetId + "/creatives?fields=id,name,object_story_spec&access_token=" + $token)

foreach ($c in $creatives.data) {
    Write-Output "----------------------------------------"
    Write-Output "Nome:           $($c.name)"
    Write-Output "ID:             $($c.id)"
    
    if ($c.object_story_spec) {
        $spec = $c.object_story_spec | ConvertTo-Json -Depth 5
        Write-Output "Spec:           $spec"
    }
}
