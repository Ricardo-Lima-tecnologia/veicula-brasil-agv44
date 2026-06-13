$t  = "EAANKeJBFYEgBRsAaY33JZBIFVunkhrHTJHVA1t2UUEmkRGwirHq44fYfyfo3UsGKZCdUyuz65PHdXzXYkTntdhO7VQimzqzZAdF3gJtLmwwo1scL8wluCZB8SVPduwGUTGmjq9MB2itmRPmNwRLI4wajvIOCfh7n2Tmyc8IRBuFP70PXDPKY3fATAHIpG7ythCTtKYvv9BQuLkfnDqhf678MF5eNqrr7pjgiiztWmYtTowMxZCNfa36z6cbfQnErsFSLoX5kRNDsqkCM6jzNZBnXax"
$tg = [uri]::EscapeDataString('{"geo_locations":{"countries":["BR"]},"age_min":18,"age_max":65}')
$body = "daily_budget=4000&targeting=$tg&status=ACTIVE&access_token=$t"

try {
    $r = Invoke-RestMethod -Method POST `
         -Uri "https://graph.facebook.com/v21.0/120246833213070069" `
         -Body $body `
         -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO Conjunto: $($r | ConvertTo-Json -Compress)"
} catch {
    $s  = $_.Exception.Response.GetResponseStream()
    $rd = New-Object System.IO.StreamReader($s)
    Write-Output "ERRO: $($rd.ReadToEnd())"
}
