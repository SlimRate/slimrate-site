# PowerShell Script to Remove mobile-fixes.css Links from HTML Files
# This script removes all <link> tags that reference mobile-fixes.css

$htmlFiles = @(
    "docs\products\hardware\sr155-duo.html",
    "docs\products\hardware\sr-wlhs1.html",
    "docs\products\hardware\sr-whs1.html",
    "docs\products\hardware\sr-ds1.html",
    "docs\products\hardware\sr-swan.html",
    "docs\products\hardware\a920.html",
    "docs\products\hardware\sr-falcon.html",
    "docs\products\hardware\sr155-solo.html",
    "docs\liquor-control.html",
    "docs\a35.html",
    "docs\a920.html",
    "docs\admin-panel.html",
    "docs\aiscale-label-printing-s130.html",
    "docs\aiscale-pos-s625.html",
    "docs\barcode-lookup.html",
    "docs\cokie.html",
    "docs\digital-scale.html",
    "docs\do_not_sell_my_info.html",
    "docs\e-commerce.html",
    "docs\dataremove.html",
    "docs\company.html",
    "docs\employerConfirm.html",
    "docs\h-casual.html",
    "docs\hardware.html",
    "docs\h-truck.html",
    "docs\h-quick.html",
    "docs\h-fine.html",
    "docs\h-coffee.html",
    "docs\hikvision.html",
    "docs\homebase.html",
    "docs\h-bars.html",
    "docs\index.html",
    "docs\integrations.html",
    "docs\legal.html",
    "docs\merchant.html",
    "docs\pricing.html",
    "docs\payment_processing.html",
    "docs\mobile-app.html",
    "docs\privacy.html",
    "docs\r-grocery.html",
    "docs\r-clothing.html",
    "docs\r-liquor.html",
    "docs\r-specialty.html",
    "docs\retail.html",
    "docs\restaurant.html",
    "docs\software.html",
    "docs\sr-410.html",
    "docs\sr-ds1.html",
    "docs\sr-falcon.html",
    "docs\sr-swan.html",
    "docs\sr-trp1.html",
    "docs\sr-whs1.html",
    "docs\sr-wlhs1.html",
    "docs\sr155-duo.html",
    "docs\sr155-solo.html",
    "docs\terms.html",
    "docs\woocommerce.html",
    "docs\tobacco-scan-data.html"
)

$rootPath = "c:\Users\markb\Documents\GitHub\slimrate-site"
$processedCount = 0
$errorCount = 0

Write-Host "Starting to remove mobile-fixes.css links from HTML files..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $htmlFiles) {
    $fullPath = Join-Path $rootPath $file
    
    if (Test-Path $fullPath) {
        try {
            # Read file content
            $content = Get-Content $fullPath -Raw -Encoding UTF8
            
            # Remove line with mobile-fixes.css (both relative and absolute paths)
            $originalContent = $content
            $content = $content -replace '(?m)^\s*<link[^>]*mobile-fixes\.css[^>]*>\s*[\r\n]+', ''
            
            # Save only if content changed
            if ($content -ne $originalContent) {
                Set-Content -Path $fullPath -Value $content -Encoding UTF8 -NoNewline
                Write-Host "[OK] Removed link from: $file" -ForegroundColor Green
                $processedCount++
            } else {
                Write-Host "[SKIP] No mobile-fixes.css link found in: $file" -ForegroundColor Yellow
            }
        }
        catch {
            Write-Host "[ERROR] Failed to process: $file" -ForegroundColor Red
            Write-Host "  Error: $_" -ForegroundColor Red
            $errorCount++
        }
    }
    else {
        Write-Host "[WARN] File not found: $file" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Files processed: $processedCount" -ForegroundColor Green
Write-Host "  Errors: $errorCount" -ForegroundColor $(if ($errorCount -eq 0) { "Green" } else { "Red" })
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Done! All mobile-fixes.css links have been removed." -ForegroundColor Green
Write-Host "The styles are now consolidated in style.css" -ForegroundColor Green
