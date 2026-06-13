$t = "EAANKeJBFYEgBRsAaY33JZBIFVunkhrHTJHVA1t2UUEmkRGwirHq44fYfyfo3UsGKZCdUyuz65PHdXzXYkTntdhO7VQimzqzZAdF3gJtLmwwo1scL8wluCZB8SVPduwGUTGmjq9MB2itmRPmNwRLI4wajvIOCfh7n2Tmyc8IRBuFP70PXDPKY3fATAHIpG7ythCTtKYvv9BQuLkfnDqhf678MF5eNqrr7pjgiiztWmYtTowMxZCNfa36z6cbfQnErsFSLoX5kRNDsqkCM6jzNZBnXax"

# Use wildcard search to avoid encoding issues with accented characters
$file = Get-ChildItem -Path "G:\" -Recurse -Filter "*18 de maio 13h.mp4" -ErrorAction SilentlyContinue | Select-Object -First 1
if (-not $file) {
    Write-Output "Arquivo nao encontrado! Tentando caminho alternativo..."
    $file = Get-ChildItem -Path "G:\" -Recurse -Filter "*Video*13h*" -ErrorAction SilentlyContinue | Select-Object -First 1
}
Write-Output "Arquivo: $($file.Name)"
Write-Output "Tamanho: $([math]::Round($file.Length/1MB,1)) MB"

# Upload video
$videoBytes = [System.IO.File]::ReadAllBytes($file.FullName)
$boundary   = [System.Guid]::NewGuid().ToString()

$bodyStart = [System.Text.Encoding]::UTF8.GetBytes(
    "--$boundary`r`n" +
    "Content-Disposition: form-data; name=`"source`"; filename=`"video_agv.mp4`"`r`n" +
    "Content-Type: video/mp4`r`n`r`n"
)
$bodyEnd = [System.Text.Encoding]::UTF8.GetBytes("`r`n--$boundary`r`n" +
    "Content-Disposition: form-data; name=`"title`"`r`n`r`n" +
    "CRIATIVO 03 | VIDEO AGV TRUCK 9x16`r`n" +
    "--$boundary--`r`n"
)

$stream = New-Object System.IO.MemoryStream
$stream.Write($bodyStart, 0, $bodyStart.Length)
$stream.Write($videoBytes, 0, $videoBytes.Length)
$stream.Write($bodyEnd, 0, $bodyEnd.Length)
$multipartBody = $stream.ToArray()

Write-Output "Enviando video para Meta Ads... (aguarde)"

try {
    $r = Invoke-WebRequest -Method POST `
         -Uri "https://graph-video.facebook.com/v21.0/act_1326033376331027/advideos?access_token=$t" `
         -Body $multipartBody `
         -ContentType "multipart/form-data; boundary=$boundary" `
         -TimeoutSec 300
    Write-Output "SUCESSO VIDEO:"
    Write-Output $r.Content
} catch {
    Write-Output "ERRO: $($_.Exception.Response.StatusCode)"
    Write-Output $_.ErrorDetails.Message
}
