#!/usr/bin/env pwsh

Write-Host "Fixing JSDoc issues in service files..." -ForegroundColor Green

# Get all service files
$serviceFiles = Get-ChildItem -Path "src/service" -Filter "*.ts" -Recurse

$totalFiles = $serviceFiles.Count
$fixedFiles = 0

foreach ($file in $serviceFiles) {
    Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
    
    $content = Get-Content $file.FullPath -Raw
    $originalContent = $content
    
    # Fix @method and @description tags
    $content = $content -replace '\*\s*@method\s+\w+', ''
    $content = $content -replace '\*\s*@description\s+', ''
    $content = $content -replace '\*\s*@interface\s+\w+', ''
    
    # Clean up empty lines that might be left after removing tags
    $content = $content -replace '\n\s*\*\s*\n', "`n"
    
    # Remove trailing whitespace
    $content = $content -replace '\s+$', ''
    
    # If content changed, write it back
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullPath -Value $content -NoNewline
        $fixedFiles++
        Write-Host "  Fixed" -ForegroundColor Green
    } else {
        Write-Host "  No changes needed" -ForegroundColor Blue
    }
}

Write-Host "`nJSDoc fix complete!" -ForegroundColor Green
Write-Host "Total files processed: $totalFiles" -ForegroundColor Cyan
Write-Host "Files fixed: $fixedFiles" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "   1. Run: npm run docs:build" -ForegroundColor White
Write-Host "   2. Check for any remaining warnings" -ForegroundColor White
