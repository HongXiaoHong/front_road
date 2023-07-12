> 记住你的价值，它不因外观的不雅而贬值，是金子总有发光的一天

# front_road

前端之路开启了

[Java/前端/Go/大数据/C学习路线分享 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv14023271?spm_id_from=333.999.0.0)

在项目中磨练自己

[freecodecamp](https://www.freecodecamp.org/learn)

### simple_markdown_previewer | 平平无奇 markdown 编辑器

markdown 内容

```markdown
# 风霜雪剑

## python

```python
print("hello python")
```

---
这是一封离别信
```python
print("letting go")
```

---
# 风霜雪剑

这是一封离别信
```python
print("hello")
```

# 风霜雪剑

这是一封离别信
```python
print("hello")
```
```

![最终显示结果](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/6b3513b303dfd53ad667076b92342ba.png)

编辑效果

![编辑效果](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_F6tmHmYTar.gif)

#### 使用技术

- html
- css
  - @font-face 定义字体
- js
- react 更好的操作页面以及数据
- babel 编译 es6 以及 jsx
- webpack 打包 只能加载 js 以及 json 所以需要下面的 loader
- style-loader 加载 css
- css-loader 加载 css
- htmlwebpack-loader 加载 html
- marked markdown 渲染成 html
  - marked-mangle 渲染邮箱到 a 链接
  - marked-highlight 代码高亮
  - highlight.js 代码高亮

使用 node/npm/react 搭建
先写了一个 hello world
把项目搭建起来先 详见后面的搭建过程

没 import
![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_ux3ZdvuJOX.png)

import 之后
![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_nuAtcn2zhv.png)

```
Compiled with problems:
ERROR in ./src/App.css 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> :root {
|     --header-height: 4vh;
|     --total-radius: 5px;
```

npm install --save-dev style-loader css-loader

```json
{
test: /\.css$/,
use: ['style-loader', 'css-loader'],
},
```

```bash
npm install marked
```

marked-mangle 使用HTML字符引用来修改邮件链接。

```bash
npm install marked-mangle

```

marked-highlight 代码高亮

```bash
npm install marked-highlight
npm install highlight.js
```

### 资料

#### 创建 react 项目过程

在使用Webpack搭建React应用之前，你需要确保你的系统已经安装了Node.js和npm。以下是使用Webpack和Babel搭建React应用的步骤：

##### 创建项目目录

在你的工作区域，创建一个新的项目目录，并进入该目录。例如：

```bash
mkdir simple_markdown_previewer && cd simple_markdown_previewer
```

![simple_markdown_previewer_new_directory](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/simple_markdown_previewer_new_directory.png)

##### 初始化项目

使用`npm init -y`命令初始化项目。这将创建一个新的`package.json`文件。

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

##### 安装React和ReactDOM

使用npm安装React和ReactDOM：

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

##### 安装Webpack

webpack是一个现代JavaScript应用程序的静态模块打包器，现代前端应用很多都是用webpack打包，webpack详细使用请看[文档](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.js.org%2Fconcepts%2F "https://webpack.js.org/concepts/")

使用npm安装Webpack和Webpack的命令行接口：

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

安装 webpack-dev-server

```bash
npm i webpack-dev-server --save-dev

```

webpack-dev-server用来搭建一个本地服务，可以热加载前端项目，详细请看[文档](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.js.org%2Fconfiguration%2Fdev-server%2F "https://webpack.js.org/configuration/dev-server/")。

##### 安装Babel

babel是javascript编辑器，作用如下：

1. 负责把ES6、ES7等高版本js编译成低版本js，供浏览器运行。
2. 负责把react语法（jsx）编译成js。

babel详细使用请看[文档](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2F "https://babeljs.io/docs/en/")。

使用npm安装Babel及其相关的插件和预设：

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

##### 创建源代码文件

新建src文件夹、index.js文件、App.js(App.js)文件。完成后，文件结构如下：

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/webstorm64_7kpwZtrvhJ.png)

###### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
</head>
<body>
<div id="root"></div>
</body>
</html>

```

###### index.js

在项目目录中，创建一个新的源代码目录（例如，`src`），并在其中创建一个新的JavaScript文件（例如，`index.js`）。在这个文件中，你可以开始编写你的React代码。

```js
import React from "react"
import {createRoot} from "react-dom/client";
import App from "./App";
import * as ReactDOM from "react-dom";


const root = createRoot(document.getElementById("root"));
root.render(<App name={"hong"}/>);

// ReactDOM.render(<App name={"hong"}/>, document.getElementById("root"))
```

###### App.js

```js
import React from "react"

class App extends React.Component {
    render() {
        return <h1>App, {this.props.name}</h1>;
    }
}

export default App
```

##### 配置Webpack

webpack集成babel还需要babel-loader，加载html文件还需要插件html-webpack-plugin

```bash

npm i babel-loader html-webpack-plugin --save-dev

```

在项目目录中，创建一个新的`webpack.config.js`文件，并在其中配置Webpack。以下是一个基本的Webpack配置，它配置了Babel加载器以处理JSX：

```javascript
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: {
      main: './src/index.js',
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
      ],
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ],
   mode: "development"
};

```

##### 配置Babel

在项目目录中，创建一个新的`.babelrc`文件，并在其中配置Babel。以下是一个基本的Babel配置，它启用了React预设：

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

##### 修改`package.json`

在`package.json`文件中，添加一个新的脚本来运行Webpack：

```json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "webpack serve --mode development --open --port 8890",
"build": "webpack"
},
```

##### 运行项目

Webpack将会编译你的代码，并生成一个新的`bundle.js`文件。

现在，你可以使用`npm start`命令来运行你的项目。

以上就是使用Webpack和Babel搭建React应用的基本步骤。请注意，这只是一个基本的配置，实际的项目可能需要更复杂的配置，例如处理CSS和图片文件、优化生产构建、配置热模块替换等。

### 总结

##### npm init -y | 构建 node.js 项目

`npm init -y` 是一个在命令行中使用的 npm 命令，用于快速初始化一个新的 Node.js 项目。

`npm init` 命令会启动一个用于创建新的 `package.json` 文件的工具。`package.json` 文件是一个标准的文件，用于记录 Node.js 项目的各种信息，如项目名称、版本、描述、作者、依赖等。

在运行 `npm init` 命令后，工具会向用户提出一系列问题，如项目名称、版本、描述等，用户需要手动输入这些信息。然后，工具会根据用户输入的信息生成 `package.json` 文件。

然而，如果在 `npm init` 命令后添加 `-y` 参数，如 `npm init -y`，则工具会自动填充所有问题的默认值，并立即生成 `package.json` 文件，而不会向用户提出任何问题。这对于想要快速开始新项目的开发者来说非常方便。

总的来说，`npm init -y` 命令可以让开发者快速、无需手动输入任何信息地初始化一个新的 Node.js 项目。

#### npm install --save react react-dom npm具体帮我们做了什么?

`npm install --save react react-dom` 这个命令做了以下几件事：

1. **下载包**：npm会从npm仓库下载`react`和`react-dom`这两个包。这两个包是React的核心库，`react`包含了创建React组件的功能，`react-dom`提供了将React组件渲染到DOM的功能。

2. **安装包**：npm会将这两个包安装到当前项目的`node_modules`目录下。这个目录是npm默认的包安装位置，它包含了项目所需的所有包。

3. **更新package.json**：由于使用了`--save`选项，npm会将这两个包添加到`package.json`文件的`dependencies`字段。这意味着这两个包是项目运行时的依赖。`package.json`文件是一个描述项目的文件，它包含了项目的名称、版本、脚本、依赖等信息。

4. **生成或更新package-lock.json**：npm还会生成或更新`package-lock.json`文件。这个文件描述了项目依赖的确切版本，以确保在不同的环境中安装相同的依赖。

总的来说，`npm install --save react react-dom`命令让你的项目能够使用React，并且确保了你的项目在不同的环境中都能正确地安装和使用React。

#### --save-dev 跟 --save 有什么区别

`--save`和`--save-dev`都是npm install命令的选项，它们用于将安装的包添加到`package.json`文件的依赖列表中。但是，它们添加的依赖类型是不同的：

1. **\--save（或者 -S）**：这个选项将包添加到`dependencies`字段。`dependencies`是项目在生产环境（即实际运行时）需要的依赖。当你发布或部署你的应用时，这些依赖会被安装。例如，一个Express应用需要`express`包，或者一个React应用需要`react`和`react-dom`包，这些都是生产依赖。

2. **\--save-dev（或者 -D）**：这个选项将包添加到`devDependencies`字段。`devDependencies`是项目在开发环境（即开发和测试时）需要的依赖，但在生产环境不需要。例如，测试库（如`jest`）、构建工具（如`webpack`）、代码格式化工具（如`prettier`）等都是开发依赖。

总的来说，`--save`和`--save-dev`的区别在于安装的包是用于生产环境还是开发环境。在你运行`npm install`时，两种类型的依赖都会被安装，但是当你打包或部署你的应用时（通常会运行`npm install --production`），只有`dependencies`中的包会被安装。

#### 第七步中 Babel加载器会去加载第八部中配置的babelrc文件来进行编译react文件?

在Webpack中，我们使用加载器（loaders）来处理特定类型的文件。在这个例子中，我们使用了Babel加载器（babel-loader）来处理JavaScript文件。Babel加载器会使用Babel编译器来编译代码。

Babel编译器的配置通常在`.babelrc`文件中指定。在这个文件中，我们可以指定我们想要使用的Babel插件和预设。在这个例子中，我们使用了`@babel/preset-env`和`@babel/preset-react`预设。`@babel/preset-env`预设使我们能够使用最新的JavaScript语法，而`@babel/preset-react`预设使我们能够使用JSX语法。

所以，当Webpack处理一个JavaScript文件时，它会使用Babel加载器，然后Babel加载器会使用`.babelrc`文件中的配置来编译这个文件。这就是为什么我们需要在`.babelrc`文件中指定我们的Babel配置。

#### package.json scripts

"scripts": { "start": "webpack --mode development", "build": "webpack --mode production" }

这个脚本是在`package.json`文件中定义的，它定义了两个npm脚本：`start`和`build`。这些脚本可以通过运行`npm run start`或`npm run build`来执行。

1. **"start": "webpack --mode development"**：这个脚本运行Webpack，并将其模式设置为`development`。在开发模式下，Webpack会优化构建速度和生成的输出的可读性，但不会优化输出的文件大小。这个模式适合在开发过程中使用。

2. **"build": "webpack --mode production"**：这个脚本运行Webpack，并将其模式设置为`production`。在生产模式下，Webpack会优化输出的文件大小和运行性能，但不会优化构建速度和生成的输出的可读性。这个模式适合在构建用于部署的最终版本时使用。

总的来说，这两个脚本提供了一个方便的方式来运行Webpack，无论是在开发过程中还是在构建最终版本时。

#### "start": "webpack --mode development", 运行npm start 我们要怎么访问呢, 我没看到有配置端口什么的呀?

你的理解是正确的。在你提供的脚本中，`npm start`只是运行了Webpack，它并没有启动一个服务器。因此，你无法通过访问某个端口来查看你的应用。

如果你想要在开发过程中启动一个服务器，并且能够在浏览器中查看你的应用，你可以使用`webpack-dev-server`或者`webpack serve`（在Webpack 5中）。

首先，你需要安装`webpack-dev-server`：

```
bashnpm install --save-dev webpack-dev-server

```

然后，你可以在你的`package.json`文件中添加一个新的脚本来启动`webpack-dev-server`：

```
json"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}

```

现在，当你运行`npm start`，Webpack会启动一个开发服务器，并且你的应用将在浏览器中自动打开。默认情况下，开发服务器运行在`localhost:8080`，但你可以在你的Webpack配置中更改这个设置。

请注意，`webpack-dev-server`在生产环境中并不适用，它只应该在开发环境中使用。

#### webpack-dev-server在生产环境中并不适用，它只应该在开发环境中使用 那么生产环境的呢?

在生产环境中，你通常不会使用`webpack-dev-server`。`webpack-dev-server`主要用于开发环境，因为它提供了实时重新加载（live-reloading）和源代码映射（source maps）等功能，这些功能在开发过程中非常有用，但在生产环境中并不需要。

在生产环境中，你会构建你的应用（使用`webpack --mode production`），然后将构建的文件部署到一个静态文件服务器或者一个应用服务器。这个服务器可以是Nginx、Apache、Express.js等等。

例如，如果你的应用是一个单页应用（SPA），你可以将构建的文件（通常是一个`dist`目录）部署到一个静态文件服务器。当用户访问你的应用时，服务器会返回`index.html`文件，然后浏览器会加载和执行JavaScript文件，你的应用就会在用户的浏览器中运行。

如果你的应用需要后端服务，你可能会将构建的文件部署到一个应用服务器，这个服务器可以处理静态文件请求，也可以处理API请求。

总的来说，生产环境的部署方式取决于你的应用的具体需求。

#### SPA

SPA 是 Single Page Application（单页应用程序）的缩写。这是一种Web应用程序或网站的设计模式，其中所有必要的HTML、CSS和JavaScript都在单个页面加载，页面不会因为用户的操作而重新加载或跳转。相反，使用JavaScript动态地改变页面的内容，这可以提高用户体验，因为页面不需要每次都进行完全的刷新。

在SPA中，大部分资源（HTML + CSS + Scripts）都只需要加载一次，通常在应用程序启动时。只有用户请求的数据会被传输到网络上。这种模式的主要优点是响应速度，用户在Web应用中的操作不需要服务器的处理和页面的重新加载。

这种模式的一个典型例子是Gmail：在你登录并加载Gmail后，所有的交互（如读取邮件、发送邮件、删除邮件等）都不会导致页面的重新加载。

然而，SPA也有一些缺点。由于大部分工作都在客户端完成，所以可能会导致初次加载时的性能问题。此外，如果没有正确处理，可能会导致搜索引擎优化（SEO）问题，因为搜索引擎可能无法正确地抓取和解析单页应用的内容。

为了解决这些问题，一些现代的JavaScript框架（如React和Vue）提供了服务器端渲染（SSR）和预渲染（prerendering）等解决方案。

#### SSR

SSR，全称为 Server-Side Rendering（服务器端渲染），是一种流行的渲染策略，主要用于改善首次加载性能和优化搜索引擎优化（SEO）。

在传统的单页应用（SPA）中，大部分应用逻辑都在客户端处理，包括路由和视图的渲染。这意味着用户在首次访问应用时，需要下载整个应用的代码，然后在浏览器中执行JavaScript来生成页面。这可能会导致首次加载时间较长，特别是在网络连接较慢或设备性能较差的情况下。

服务器端渲染（SSR）解决了这个问题。在SSR中，当用户请求一个页面时，服务器会运行应用的JavaScript代码，并生成页面的HTML。然后，服务器将这个已经渲染好的HTML发送给客户端。这样，用户可以立即看到页面，而不需要等待所有的JavaScript代码下载和执行。

此外，SSR还可以改善SEO，因为搜索引擎爬虫可以直接抓取和解析服务器返回的HTML。

然而，SSR也有一些缺点。首先，服务器需要处理更多的计算任务，这可能会增加服务器的负载。其次，因为页面的HTML是在服务器上生成的，所以用户可能需要等待服务器的响应时间。

现代的前端框架，如React和Vue，都提供了对SSR的支持。

#### webpack 打包到dist文件的时候, 会把node_modules的包打包进去吗?

Webpack 在打包时会将你的源代码和所有依赖的模块一起打包到一个或多个 bundle 文件中。这些依赖的模块包括你在项目中通过 `import` 或 `require` 引入的来自 `node_modules` 的模块。

但是，Webpack 不会将整个 `node_modules` 文件夹内容打包进去，只有你的代码实际依赖的模块才会被包含在内。这是因为Webpack的工作方式是通过构建一个依赖图，这个依赖图会包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

此外，你还可以使用Webpack的 `externals` 配置选项来防止某些模块被打包到bundle中，这在你希望通过 `<script>` 标签来引入某些库（如jQuery或lodash），或者在使用CDN等情况下可能会很有用。

总的来说，Webpack会将你的源代码和所有需要的 `node_modules` 中的模块打包到一起，但不会包含你没有使用的模块，也可以配置不包含特定的模块。

#### Webpack和Vite 区别

Webpack和Vite都是现代前端构建工具，它们都可以用于模块打包、开发服务器、热模块替换（HMR）等功能。但是，它们在设计理念和实现方式上有一些重要的区别。

1. **开发环境的模块加载方式**：Webpack在开发环境中，会预先将所有模块打包成一个或多个bundle。而Vite在开发环境中采用了一种被称为原生ES模块导入（Native ESM）的方式，只有当模块被实际请求时才会进行编译。这种方式可以大大提高大型项目的开发服务器启动速度。

2. **构建速度**：Vite使用了ESBuild进行模块打包，ESBuild是用Go语言编写的，比Webpack使用的Terser（用JavaScript编写）在构建速度上快很多。这意味着在生产环境构建阶段，Vite通常比Webpack快。

3. **插件生态**：截至我知识库的更新日期（2021年9月），Webpack的插件生态系统更加成熟和丰富。许多常见的和特殊的需求都有现成的Webpack插件可以使用。而Vite虽然也有插件系统，但相对来说插件数量较少。

4. **兼容性**：Webpack对老版本浏览器的兼容性更好，因为它可以将所有代码打包成能在老版本浏览器上运行的代码。而Vite更侧重于现代浏览器，它依赖于原生ES模块支持，对于不支持ES模块的老版本浏览器，可能需要额外的处理。

5. **配置复杂性**：Webpack的配置通常比较复杂，尤其是对于大型项目，配置文件可能会变得很长。而Vite的配置通常更简单，更易于理解和管理。

6. **热模块替换（HMR）**：Vite的HMR通常比Webpack更快，因为Vite只需要更新改变的文件，而Webpack在某些情况下可能需要重新加载整个应用。

总的来说，Webpack和Vite各有优势，选择哪一个取决于你的具体需求和项目类型。

#### index.js的示例

在React应用中，`index.js`文件通常是应用的入口点，它负责渲染根React组件到DOM。以下是一个基本的`index.js`文件示例：

```
javascriptimport React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

在这个示例中，我们首先从`react`和`react-dom`模块导入`React`和`ReactDOM`。然后，我们从`./App`模块导入`App`组件，这通常是我们应用的主组件。

然后，我们使用`ReactDOM.render()`函数将`App`组件渲染到DOM。这个函数接受两个参数：要渲染的React元素和要将元素渲染到的DOM节点。

我们将`App`组件包裹在`<React.StrictMode>`标签中，这是一个用于检查潜在问题的工具。最后，我们将结果渲染到id为`root`的DOM节点。

请注意，这个示例假设你的HTML文件中有一个id为`root`的元素，React将在这个元素中渲染你的应用。如果你的HTML文件中没有这个元素，你需要添加它，或者将`'root'`改为你实际的元素id。

#### index.html

在一个标准的React应用中，HTML页面通常位于项目的`public`目录下，并且被命名为`index.html`。这个HTML文件是你的React应用的唯一HTML文件（因为React是用来构建单页面应用的），并且它作为你的React应用的入口点。

在这个`index.html`文件中，通常会有一个id为`root`的`div`元素，React应用会将其组件渲染到这个`div`元素中。

以下是一个典型的`index.html`文件的示例：

```
html<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="../src/index.js"></script>
  </body>
</html>

```

在这个示例中，`<div id="root"></div>`就是React应用的挂载点。`<script src="../src/index.js"></script>`标签用于加载我们的React应用。

请注意，这个HTML文件的具体位置和内容可能会根据你的项目结构和配置有所不同。

#### createRoot

`createRoot` 是 Vue 3 中的一个新方法，用于创建和挂载 Vue 应用。这个方法是 Vue 3 中新的应用挂载方式，它取代了 Vue 2 中的 `new Vue()` 构造函数。

`createRoot` 的主要作用是创建一个 Vue 应用的根实例，并将其挂载到 DOM 上。它接受一个 DOM 元素作为参数，这个元素将作为 Vue 应用的挂载点。

这是一个 `createRoot` 的基本使用示例：

```
javascriptimport { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

```

在这个例子中，`createApp(App)` 创建了一个新的 Vue 应用实例，并将 `App.vue` 组件设置为根组件。然后，`.mount('#app')` 将这个 Vue 应用挂载到 id 为 'app' 的 DOM 元素上。

注意：`createRoot` 是 Vue 3.0 的早期版本中的 API，后来在正式版本中被更名为 `createApp`。所以在最新的 Vue 3 文档中，你可能会看到 `createApp` 而不是 `createRoot`。

在 React 18 中，`createRoot` 是一个新的 API，它用于创建和挂载 React 应用。这个 API 是 Concurrent Mode（并发模式）的一部分，这是 React 的一个新特性，它可以让 React 在渲染过程中更好地利用多核 CPU 和快速的 I/O。

`createRoot` 的主要作用是创建一个 React 应用的根实例，并将其挂载到 DOM 上。它接受一个 DOM 元素作为参数，这个元素将作为 React 应用的挂载点。

这是一个 `createRoot` 的基本使用示例：

```
javascriptimport { createRoot } from 'react-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

```

在这个例子中，`createRoot(document.getElementById('root'))` 创建了一个新的 React 应用实例，并将 id 为 'root' 的 DOM 元素设置为挂载点。然后，`root.render(<App />)` 将 `App` 组件渲染到这个挂载点上。

使用 `createRoot` 可以让你的 React 应用从并发模式中受益，这可以带来更平滑的用户体验，因为并发模式可以让 React 在渲染过程中更好地利用系统资源，避免阻塞主线程，从而提高应用的响应速度。

#### webpack-cli

`webpack-cli` 是 Webpack 的命令行接口，它提供了一系列命令行工具，使得开发者可以通过命令行来配置和操作 Webpack。

以下是 `webpack-cli` 的一些主要功能：

1. 初始化项目：`webpack-cli` 提供了 `init` 命令，可以帮助开发者快速初始化一个新的 Webpack 项目，生成基本的配置文件。

2. 打包资源：通过 `webpack-cli`，开发者可以直接在命令行中输入 `webpack` 命令来打包资源。此外，开发者还可以在命令行中指定配置文件、选择不同的环境模式（如开发模式或生产模式）等。

3. 配置 Webpack：`webpack-cli` 提供了一系列的命令行选项，使得开发者可以在命令行中直接配置 Webpack。例如，开发者可以通过 `--mode` 选项来设置环境模式，通过 `--config` 选项来指定配置文件等。

4. 运行 Webpack Dev Server：如果项目中安装了 `webpack-dev-server`，那么开发者可以通过 `webpack-cli` 来运行它，从而实现热更新等功能。

5. 迁移工具：`webpack-cli` 还提供了一个迁移工具，可以帮助开发者将旧版本的 Webpack 配置文件迁移到新版本。

总的来说，`webpack-cli` 是 Webpack 的一个重要组成部分，它极大地方便了开发者使用和配置 Webpack。

### 问题

#### options has an unknown property 'contentBase' | webpack 配置错误

运行 webpack serve --mode development \[webpack-cli\] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema. - options has an unknown property 'contentBase'. These properties are valid: object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMidd leware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? } 报错了, 帮我修复一下运行 webpack serve --mode development \[webpack-cli\]无效的选项对象。已使用与 API 架构不匹配的选项对象初始化开发服务器。 - 选项具有未知属性“contentBase”。这些属性有效： object { allowedHosts？， bonjour？， client？， compress？， devMiddleware？， headers？， historyApiFallback？， host？， hot？， http2？， https？， ipc？， liveReload？， magicHtml？， onAfterSetupMidd leware？， onBeforeSetupMiddleware？， onListening？， open？， port？， proxy？， server？， setupExitSignals？， setupMiddlewares？， static？， watchFiles？， webSocketServer？} 报错了, 帮我修复一下

这个错误是由于在webpack的配置文件中，`devServer`对象的`contentBase`属性在新版本的webpack中已经被移除了。在webpack 5中，`contentBase`被替换为`static`。所以你需要在webpack配置文件中找到`devServer`对象并将`contentBase`替换为`static`。

以下是一个修复后的webpack配置文件的示例：

```
javascriptmodule.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // 用 static 替换 contentBase
    compress: true,
    port: 9000,
  },
};

```

在这个配置文件中，`devServer.static`属性被设置为项目的`public`目录，这意味着webpack dev server会在这个目录中寻找静态文件。

#### path |  没有引入 path

\[webpack-cli\] ReferenceError: path is not defined at Object.<anonymous> (D:\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\webpack.config.js:5:15) at Module.\_compile (node:internal/modules/cjs/loader:1256:14) at Module.\_extensions..js (node:internal/modules/cjs/loader:1310:10) at Module.load (node:internal/modules/cjs/loader:1119:32) at Module.\_load (node:internal/modules/cjs/loader:960:12) at Module.require (node:internal/modules/cjs/loader:1143:19) at require (node:internal/modules/cjs/helpers:110:18) at WebpackCLI.tryRequireThenImport (D:\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\node\_modules\\webpack-cli\\lib\\webpack-cli.js:223:30) at loadConfigByPath (D:\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\node\_modules\\webpack-cli\\lib\\webpack-cli.js:1406:38) at WebpackCLI.loadConfig (D:\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\node\_modules\\webpack-cli\\lib\\webpack-cli.js:1515:44) 帮我修复一下\[webpack-cli\]引用错误： 未定义路径 在对象。 （D：\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\webpack.config.js：5：15） at Module.\_compile （node：internal/modules/cjs/loader：1256：14） 在Module.\_extensions..js （node：internal/modules/cjs/loader：1310：10） at Module.load （node：internal/modules/cjs/loader：1119：32） at Module.\_load （node：internal/modules/cjs/loader：960：12） at Module.require （node：internal/modules/cjs/loader：1143：19） at require（节点：内部/模块/CJS/帮助程序：110：18） at WebpackCLI.tryRequireThenImport （D：\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\node\_modules\\webpack-cli\\lib\\webpack-cli.js：223：30） at loadConfigByPath （D：\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\node\_modules\\webpack-cli\\lib\\webpack-cli.js：1406：38） at WebpackCLI.loadConfig （D：\\documents\\projects\\github\\branch\\front\_road\\simple\_markdown\_previewer\\node\_modules\\webpack-cli\\lib\\webpack-cli.js：1515：44） 帮我修复一下

这个错误是因为你的webpack配置文件中没有引入Node.js的`path`模块。在JavaScript和Node.js中，如果你试图访问一个未定义的变量，就会抛出一个`ReferenceError`。

你可以在文件的顶部添加以下代码来引入`path`模块：

```
javascriptconst path = require('path');

```

所以，你的webpack配置文件应该看起来像这样：

```
javascriptconst path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // 用 static 替换 contentBase
    compress: true,
    port: 9000,
  },
};

```

这样，`path`模块就可以在你的webpack配置文件中被正确地引用和使用了。

### 参考

- [从零搭建React项目 - 掘金 (juejin.cn)](https://juejin.cn/post/7134314981515853831)