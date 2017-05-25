# myproj

npm init

npm install --save react react-dom babelify babel-preset-react

browserify -t [ babelify ] main.js -o bundle.js

# 自动监听文件修改并生成 bundle.js

npm install -g browserify watchify

watchify -t [ babelify ] main.js -o bundle.js

watchify -t browserify-css -t babelify main.js -o bundle.js