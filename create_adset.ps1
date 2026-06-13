$t = "EAANKeJBFYEgBRm8CTqKqEnfme3p3Hi8qzZAGWkpb4LSi5Us5uSEkJTcTN2VUcCYzZB0pV8sZAZCigW5DAhh7jI3piJuKerTZCNAx0RWC0pirxAfZCl4AG5xvnyG0ZAGUnKYzZCneKnTMUXx2mJmDth8zKov5vy8WCTGGEqZCOoM3f1O3v5rsHN9yb636LfEJckZBNAbSULSBH1WzZCa4gvzuKhoB5NvCsMhFjeAYJKQY8a6rMZC3Ko1n9UR88DFbER64IOoHAEql4zUcpawyNgRs8E1Hsba3"

$targeting = [uri]::EscapeDataString('{"geo_locations":{"regions":[{"key":"444"}]},"age_min":18,"age_max":65}')
$promoted  = [uri]::EscapeDataString('{"page_id":"1197572870106680"}')

$body = "name=PUBLICO+ABERTO+%7C+18-65%2B+%7C+REGIAO+VALIDADA" +
        "&campaign_id=120246831588250069" +
        "&optimization_goal=CONVERSATIONS" +
        "&billing_event=IMPRESSIONS" +
        "&daily_budget=3000" +
        "&bid_strategy=LOWEST_COST_WITHOUT_CAP" +
        "&destination_type=WHATSAPP" +
        "&targeting=$targeting" +
        "&promoted_object=$promoted" +
        "&status=PAUSED" +
        "&access_token=$t"

try {
    $r = Invoke-WebRequest -Method POST `
         -Uri "https://graph.facebook.com/v21.0/act_1326033376331027/adsets" `
         -Body $body `
         -ContentType "application/x-www-form-urlencoded"
    Write-Output "SUCESSO:"
    Write-Output $r.Content
} catch {
    Write-Output "ERRO:"
    Write-Output $_.Exception.Response.StatusCode
    Write-Output $_.ErrorDetails.Message
}
