import React from "react"
import {marked} from "marked"
import {mangle} from "marked-mangle";
import {markedHighlight} from "marked-highlight";
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        marked.use(mangle());
        marked.use(markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, {language}).value;
            }
        }));
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true, // 允许 Git Hub标准的markdown.
            pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
            sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
            tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
            breaks: false, // 允许回车换行（该选项要求 gfm 为true）
            smartLists: true, // 使用比原生markdown更时髦的列表
            smartypants: false, // 使用更为时髦的标点
        })
        this.state = {
            markdown_preview_html: ''
        };
    }

    handleTextareaChange = (event) => {
        this.setState(state => {
            return {
                markdown_preview_html: marked.parse(event.target.value)
            }
        });
    }

    render() {
        return <div>
            <header><h1 id="title">平平无奇 markdown 编辑器</h1></header>
            <main id="markdown_container">
                <section id="markdown_content" className="markdown_viewport">
                    <header><span>markdown 内容</span></header>
                    <div><textarea className="markdown_area" placeholder="在这里输入markdown的内容"
                                   onChange={this.handleTextareaChange}/></div>
                </section>
                <section id="preview_content" className="markdown_viewport">
                    <header><span>预览结果</span></header>
                    <div id="preview_result" className="markdown_area"
                         dangerouslySetInnerHTML={{__html: this.state.markdown_preview_html}}/>
                </section>
            </main>
        </div>;
    }
}

export default App