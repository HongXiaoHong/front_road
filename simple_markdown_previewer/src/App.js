import React from "react"
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaValue: ''
        };
    }

    handleTextareaChange = (event) => {
        this.setState(state => {
            console.log(state)
            return {
                textareaValue: event.target.value
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
                                   value={this.state.textareaValue} onChange={this.handleTextareaChange}/></div>
                </section>
                <section id="preview_content" className="markdown_viewport">
                    <header><span>预览结果</span></header>
                    <div id="preview_result" className="markdown_area"><span
                        id="default_preview_result">markdown预览结果</span></div>
                </section>
            </main>
        </div>;
    }
}

export default App