$t = "EAANKeJBFYEgBRm8CTqKqEnfme3p3Hi8qzZAGWkpb4LSi5Us5uSEkJTcTN2VUcCYzZB0pV8sZAZCigW5DAhh7jI3piJuKerTZCNAx0RWC0pirxAfZCl4AG5xvnyG0ZAGUnKYzZCneKnTMUXx2mJmDth8zKov5vy8WCTGGEqZCOoM3f1O3v5rsHN9yb636LfEJckZBNAbSULSBH1WzZCa4gvzuKhoB5NvCsMhFjeAYJKQY8a6rMZC3Ko1n9UR88DFbER64IOoHAEql4zUcpawyNgRs8E1Hsba3"
$imagePath = "D:\criativos AGV\Criativo Baner.png"
$imageBytes = [System.IO.File]::ReadAllBytes($imagePath)
$imageB64   = [Convert]::ToBase64String($imageBytes)

$boundary = [System.Guid]::NewGuid().ToString()
$body = "--$boundary`r`n" +
        "Content-Disposition: form-data; name=`"CriativoBaner`"; filename=`"CriativoBaner.png`"`r`n" +
        "Content-Type: image/png`r`n`r`n"
$bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
$footer    = [System.Text.Encoding]::UTF8.GetBytes("`r`n--$boundary--`r`n")

$stream = New-Object System.IO.MemoryStream
$stream.Write($bodyBytes, 0, $bodyBytes.Length)
$stream.Write($imageBytes, 0, $imageBytes.Length)
$stream.Write($footer, 0, $footer.Length)
$multipartBody = $stream.ToArray()

try {
    $r = Invoke-WebRequest -Method POST `
         -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/adimages?access_token=$t" `
         -Body $multipartBody `
         -ContentType "multipart/form-data; boundary=$boundary"
    Write-Output "SUCESSO:"
    Write-Output $r.Content
} catch {
    Write-Output "ERRO: $($_.Exception.Response.StatusCode)"
    Write-Output $_.ErrorDetails.Message
}
