import './Article.css'
import ArticleBase from './ArticleBase'

const Article005 = (props) => {
    return (
        <div className="page-container">
            <ArticleBase title={props.title}/>
            <p>画面へのレンダリングが終わった後に何か処理を実行したい場合、</p>
            <p>useEffectを使用するとレンダリングが終わったタイミングをつかまえることができます。</p>
            <br />
            <p>これは、クラスコンポーネントを使用した場合に</p>
            <p>　・componentDidMount</p>
            <p>　・componentDidUpdate</p>
            <p>　・componentWillUnmount</p>
            <p>のライフサイクルメソッドを実装するのと同じタイミングをつかまえることができると</p>
            <p>同じ意味になります。</p>
            <br />
            <br />
            <p>useEffectは下記のように定義します。</p>
            <p>第1引数にレンダリング後に呼び出されるメソッド、第2引数に依存するstateを配列で指定します。</p>
            <p>例えば</p>
            <br />
            <div className="code-ref">
                <pre>
                    {`
  const ImageSwiper = (props) => {
      const [imageIndex, setImageIndex] = useState(0)
      const imageArray = [
          "./img/deepimpact01.jpg",
          "./img/deepimpact02.jpg",
          "./img/deepimpact03.jpg"
        ]
      useEffect(() => {
          startImageSwipe()
      })

                    `}
                </pre>
            </div>
            <br />
            <p>こんな感じで書いた場合は、第2引数を省略しているのでレンダリング後はいつでも</p>
            <p>第1引数で指定した関数が呼び出されます。</p>
            <p>例えば</p>
            <br />
            <div className="code-ref">
                <pre>
                    {`
    useEffect(() => {
        startImageSwipe()
    }, [imageIndex])
                    `}
                </pre>
            </div>
            <br />
            <p>という感じで第2引数を指定すると、imageIndexが変更されたことによりレンダリング走った場合のみ</p>
            <p>第1引数で指定した関数が呼び出されます。</p>
        </div>
    )
}
export default Article005