@echo off
echo ==========================================
echo 13월의 월급 소비 MBTI 앱 실행기 (Vite 서버)
echo ==========================================
echo.
echo 패키지 확인 및 로컬 서버를 시작합니다...
echo.

call npm install
if %errorlevel% neq 0 (
    echo [오류] npm install 실패. Node.js가 설치되어 있는지 확인해주세요.
    pause
    exit /b %errorlevel%
)

echo.
echo 웹 브라우저가 곧 열립니다!
echo (만약 열리지 않으면 브라우저에서 http://localhost:5173 주소로 입력해주세요)
echo.

:: 브라우저 자동 실행 옵션을 주기 위해 npm run dev 대신 특정 명령어를 사용할 수도 있지만
:: 단순히 npm run dev를 호출합니다. Vite 설정에 --open 플래그를 추가하면 바로 열립니다.
call npx vite --open

pause
