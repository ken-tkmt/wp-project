import './Article.css'
import ArticleBase from './ArticleBase'

const Article004 = (props) => {
    return (
        <div className="page-container">
            <ArticleBase title={props.title}/>
            <p>useState()はコンポーネントのstate(状態)を管理を行うためのしくみです。</p>
            <p>stateとはコンポーネントが内部で保持するデータのことで、</p>
            <p>画面に表示されているデータや、アプリケーションが内部で保持しているデータ等</p>
            <p>のことです。</p>
            <p>useState()を使用する場合、下記のようなフォーマットで記述します。</p>
            <br />
            <div className="code-ref">
              <pre>
                  {`
  [state名、更新メソッド名] = useState(初期値)	
                  `}
                </pre>
            </div>
            <br />
            <br />
            <p>こんな感じで使います。</p>
            <br />
            <div className="code-ref">
                <pre>
                    {`
  const Entrance = (props) => {
      // articleNumberというStateを初期値1で定義
      const [articleNumber, setArticleNumber] = useState(1)
      // アイテムがクリックされたらstate(articleNumber)を更新
      const onItemClicked = (itemNum) => {
          if (itemNum !== articleNumber) {
              setArticleNumber(itemNum)
          }
      }
                    `}
                </pre>
            </div>
            <br />
        </div>
    )
}
export default Article004