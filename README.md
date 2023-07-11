> 记住你的价值，它不因外观的不雅而贬值，是金子总有发光的一天

# front_road

前端之路开启了

[Java/前端/Go/大数据/C学习路线分享 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv14023271?spm_id_from=333.999.0.0)

在项目中磨练自己

[freecodecamp](https://www.freecodecamp.org/learn)

### simple_markdown_previewer | 平平无奇 markdown 编辑器

使用 node/npm/react 搭建
先写了一个 hello world
把项目搭建起来先

### 资料

#### 创建 react 项目过程

在使用Webpack搭建React应用之前，你需要确保你的系统已经安装了Node.js和npm。以下是使用Webpack和Babel搭建React应用的步骤：

1. **创建项目目录**：在你的工作区域，创建一个新的项目目录，并进入该目录。例如：
   
   ```bash
   mkdir simple_markdown_previewer && cd simple_markdown_previewer
   ```
   ![simple_markdown_previewer_new_directory](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/simple_markdown_previewer_new_directory.png)
2. **初始化项目**：使用`npm init -y`命令初始化项目。这将创建一个新的`package.json`文件。
   ```json
   {
     "name": "simple_markdown_previewer",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC"
   }
   ```
   日志:
   ```bash
   D:\app\code\nodejs\node.exe D:\app\code\nodejs\node_modules\npm\bin\npm-cli.js test --scripts-prepend-node-path=auto
   
   > simple_markdown_previewer@1.0.0 test
   > echo "Error: no test specified" && exit 1
   
   "Error: no test specified"
   
   ```

3. **安装React和ReactDOM**：使用npm安装React和ReactDOM：
   
   ```bash
   npm install --save react react-dom
   ```
   dependencies 增加了上面安装的两个包
   ```json
   {
     "name": "simple_markdown_previewer",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "react": "^18.2.0",
       "react-dom": "^18.2.0"
     }
   }
   
   ```

4. **安装Webpack**：使用npm安装Webpack和Webpack的命令行接口：
   
   ```bash
   npm install --save-dev webpack webpack-cli
   ```
   devDependencies 增加 webpack
   ```json
   "devDependencies": {
       "webpack": "^5.88.1",
       "webpack-cli": "^5.1.4"
     }
   ```
5. **安装Babel**：使用npm安装Babel及其相关的插件和预设：
   
   ```bash
   npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
   ```
   devDependencies 又增加了 babel 用于编译 react 的 jsx语法
   ```json
   "devDependencies": {
   "@babel/core": "^7.22.8",
   "@babel/preset-env": "^7.22.7",
   "@babel/preset-react": "^7.22.5",
   "babel-loader": "^9.1.3",
   "webpack": "^5.88.1",
   "webpack-cli": "^5.1.4"
   }
   ```
6. **创建源代码文件**：在项目目录中，创建一个新的源代码目录（例如，`src`），并在其中创建一个新的JavaScript文件（例如，`index.js`）。在这个文件中，你可以开始编写你的React代码。

7. **配置Webpack**：在项目目录中，创建一个新的`webpack.config.js`文件，并在其中配置Webpack。以下是一个基本的Webpack配置，它配置了Babel加载器以处理JSX：
   
   ```javascript
   module.exports = {
     entry: './src/index.js',
     module: {
       rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: ['babel-loader'],
         },
       ],
     },
     resolve: {
       extensions: ['*', '.js', '.jsx'],
     },
     output: {
       path: __dirname + '/dist',
       publicPath: '/',
       filename: 'bundle.js',
     },
     devServer: {
       contentBase: './dist',
     },
   };
   ```

8. **配置Babel**：在项目目录中，创建一个新的`.babelrc`文件，并在其中配置Babel。以下是一个基本的Babel配置，它启用了React预设：
   
   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

9. **修改`package.json`**：在`package.json`文件中，添加一个新的脚本来运行Webpack：
   
   ```json
   "scripts": {
     `"start": "webpack --mode development",
     "build": "webpack --mode production"`
   }
   ```

10. **运行项目**：现在，你可以使用`npm start`命令来运行你的项目。Webpack将会编译你的代码，并生成一个新的`bundle.js`文件。

以上就是使用Webpack和Babel搭建React应用的基本步骤。请注意，这只是一个基本的配置，实际的项目可能需要更复杂的配置，例如处理CSS和图片文件、优化生产构建、配置热模块替换等。