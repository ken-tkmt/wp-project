import './Article.css'
import ArticleBase from './ArticleBase'

const Article002 = (props) => {
    return (
        <div className="page-container">
            <ArticleBase title={props.title}/>
            <p>JSXは、JavaScriptでHTMLのタグ構文を使用してUIを記述するためのものです。</p>
            <p>例えばReactでUI要素を表示する場合、</p>
            <br />
            <div className="code-ref">
                <pre>
                    {`
  elem = React.createElement('h1', 'Test-Title')
  ReactDOM.render(elem, document.getElementById('root'))
                    `}
                </pre>
            </div>
            <br />
            <p>という感じに書きます。これをJSXを使用して記載すると、</p>
            <br />
            <div className="code-ref">
                <pre>
                    {`
  elem = <h1>Test-Title</h1>
  ReactDOM.render(elem, document.getElementById('root'))
                    `}
                </pre>
            </div>
            <br />
            <p>こうなります。</p>
            <p>かなり直感的になりわかりやすくなります。</p>
        </div>
    )
}
export default Article002