REM RUN CMD   .\deploy.bat
npm run build
cd dist

git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/brucetasy2/HexJsweek06.git master:gh-pages