$adId = "120246833414760069"
$token   = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
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
