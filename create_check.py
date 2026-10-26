Click-to-WhatsApp   content = r"""
$token = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
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
