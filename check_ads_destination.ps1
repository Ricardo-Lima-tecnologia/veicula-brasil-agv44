$adsetId = "120246833213070069"
$token   = "EAAQZAATQncX8BS9vRb2wvVobFySj7pm8zHqJ37bodyWe0ZCOFi8AmZCow0h9xOZAorG1O30m1NfZCWgprUqICytrC6pOxvDF6mZCVfZBcvT4TlOhmDRv6ZCV2ShZAZAbwRsFZBYJu61xCbp4zRgcrM4NA9s0tb1KC22b1xnjwi7FrDR9M3PsOwdFLTlrvAeRDRhOQNVkOPBHeaOp5rnTAZC0GGUroDTy61XFNZCgSKeikqvZCLZCdndiHlm4VVZABDWC3bHAtHZCbLiDZCkSitxb8ZD"
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
