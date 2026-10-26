$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
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
