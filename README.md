# todo
Personal to-do list and project management platform


Building project workspace


Script to generate workspace from ./todo/
mkdir dist src
cd dist
touch index.html
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Getting Started</title>
            </head>
            <body>
                <script src="main.js"></script>
            </body>
            <div id="content">
            </div>
        </html>
cd ..
cd src
touch index.js style.css
cd ..
npm init
npm install webpack webpack-cli --save-dev
check that npm is added to .gitignore
open package.json and change index.js to pull from main.js
touch webpack.config.js in ./
        const path = require('path');

        module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        };

modify package.json
    remove "main": "index.js",
    add "private": true, in it's place
    add watch, start, and build to scripts
            "watch": "webpack --watch",
            "start": "webpack serve --open",
            "build": "webpack"

Add to index.js to test webpack
        function component() {
            const element = document.createElement('div');

            element.innerHTML = `Sample string goes here`;
            return element;
        }

        document.body.appendChild(component());

npm install --save-dev webpack-dev-server
add to webpack.config.js after entry
        devtool: 'inline-source-map',
        devServer: {
            static: './dist',
        },

