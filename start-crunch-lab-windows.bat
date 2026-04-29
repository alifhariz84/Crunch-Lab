@echo off
cd /d "%~dp0"
echo Starting Crunch Lab POS local server...
echo.
echo If browser does not open, go to: http://localhost:8000
start http://localhost:8000
py -m http.server 8000
pause
