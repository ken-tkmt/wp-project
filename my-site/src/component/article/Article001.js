import './Article.css'
import ArticleBase from './ArticleBase'

const Article001 = (props) => {
    return (
        <div className="page-container">
            <ArticleBase title={props.title}/>
            <p>必須ではないですが、エディタはVSCodeが使いやすい（と思ってる）ので、</p>
            <p>
                <a href="https://code.visualstudio.com/Download">コチラ</a>からインストーラをダウンロードしてインストールしましょう。
            </p>
            <br />
            <p>次に、<a href="https://nodejs.org/ja/">コチラ</a>からNode.jsのインストーラをダウンロードします。</p>
            <p>インストールはダウンロードしたファイルを実行するだけです。</p>
            <p>インストールが完了したらVSCodeのターミナルからバージョンを確認しましょう。</p>
            <p>下のようにバージョンが表示されれば正しくインストールされています。</p><br />
            <div className="code-ref">

                <pre>
                    {`
  $ node -v
  v8.12.0
                    `}
                </pre>
                <pre>
                    {`
  $ npm -v
  6.4.1
                    `}
                </pre>
            </div>
            <br />
            <p>インストールが完了したので早速Helloworldを表示してみましょう。</p>
            <p>Reactでアプリを作成するのはとてもややこしいので、create-react-app を使用して</p>
            <p>アプリを作成するのがおススメです。</p>
            <br />
            <div className="code-ref-line">
                <pre>  npx create-react-app フォルダ名</pre>
            </div>
            <br />
            <p>とするとアプリを簡単に作成できるので</p>
            <br />
            <div className="code-ref-line">
                <pre>  npx create-react-app helloworld</pre>
            </div>
            <br />
            <p>とします。数分かかる場合もありますが、これが完了するとhelloworldというフォルダが</p>
            <p>作成されているので、helloworldフォルダに移動して、npm startを実行すると</p>
            <p>Reactのデフォルトアプリが起動されます。</p>
            <br />
            <div className="code-ref">
                <pre>
                    {`
  $ cd helloworld
  $ npm start
                    `}
                </pre>
            </div>
            <br />
            <p>起動されたブラウザが<span className="url-text">http://localhost:3000/</span>にアクセスして、</p>
            <p>ブラウザ内でReactのロゴがくるくる回っていれば正しく起動されています。</p>
        </div>
    )
}
export default Article001