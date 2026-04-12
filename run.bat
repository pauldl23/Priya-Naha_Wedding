@echo off
echo ==========================================
echo   Priya ^& Taha Wedding Website Server
echo ==========================================
echo.
echo Attempting to start local server...
echo.

:: Try to use npx serve (Node.js required)
where npx >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Node.js/npx found. Starting server at http://localhost:3000 ...
    echo (Press Ctrl+C and type 'Y' to stop)
    start "" "http://localhost:3000"
    npx -y serve .
    goto end
)

:: Try to use Python (Python required)
where python >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Python found. Starting server at http://localhost:8000 ...
    echo (Press Ctrl+C to stop)
    start "" "http://localhost:8000"
    python -m http.server 8000
    goto end
)

:: Fallback: Just open index.html
echo.
echo [!] Neither Node.js nor Python found.
echo [!] Opening index.html directly in your default browser...
start index.html

:end
pause
