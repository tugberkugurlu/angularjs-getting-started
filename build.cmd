npm install --prefix %~dp0\src
cd %~dp0/src
bower install
gulp
http-server