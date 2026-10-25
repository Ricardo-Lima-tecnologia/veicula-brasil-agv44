Click-to-WhatsApp   content = r"""
$token = "EAAQZAATQncX8BS2Hk2YQBSTkqeygMW5j50mkJRKZCMyGuamxmgBWmpe4ThnZCOLZAUP5dYlDUgtREs6ZAFbPOdYufwBhZAlpWsRZBoMDV8f6rUZCv0oYYfDmPDUrGaqRD4UZAk0BKghFiyQgeJZAZC8ZCkciWpgNmMglGslvGszZBkaKG3vsC3fza2nvkbAkBp2VfrdZAxCNz5vUHvJDHbH7qi3Nsc0ULwuiZAMulf388exqtwydNwXqqqSaxKGWk6CIHRMhLY1CDSplyY0CH4ZD"
$base = "https://graph.facebook.com/v20.0"
$ids = @("120246833413660069","120246834141110069")

foreach ($id in $ids) {
    $fields = "id,name,effective_status,creative{id,name,object_story_spec}"
    $url = $base + "/" + $id + "?fields=" + $fields + "&access_token=" + $token
    $r = Invoke-RestMethod -Uri $url
    Write-Output ("Nome: " + $r.name)
    Write-Output ("Status: " + $r.effective_status)
    if ($r.creative.object_story_spec.link_data) {
        Write-Output ("Link: " + $r.creative.object_story_spec.link_data.link)
        Write-Output ("CTA: " + $r.creative.object_story_spec.link_data.call_to_action.type)
    }
    Write-Output "---"
}
"""
with open("check_ad1.ps1", "w", encoding="utf-8") as f:
    f.write(content.strip())
print("OK - check_ad1.ps1 criado")
