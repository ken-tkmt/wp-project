import './Article.css'
import ArticleBase from './ArticleBase'

const Article006 = (props) => {
    return (
        <div className="page-container">
	        <ArticleBase title={props.title}/>
    	    <p>3枚の画像を用意して、</p>
	        <p>　・一定時間がきたら周期的に画像が切り替わる</p>
	        <p>　・切り替わる際にスライドインのアニメーションをつける</p>
	        <p>こんな感じのSwiperを作成したいと思います。</p>
	        <br />
	        <br />
	        <p>用意した画像はこの３つです。(Webの拾い物。。。)</p>
	        <br />	
	        <div className="image-sample-container">
		        <img className="image-sample" src="img/deepimpact01.jpg" alt="" />
		        <img className="image-sample" src="img/deepimpact02.jpg" alt="" />
		        <img className="image-sample" src="img/deepimpact03.jpg" alt="" />
	        </div>
	        <br />
	        <p>コードはこんな感じです</p>
	        <br />
            <div className="code-ref">
                <pre>
                    {`
  import { useState } from 'react';
  import { useEffect } from 'react';
  import './ImageSwipe.css'

  export let SWIPE_INTERVAL = 5000

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
    
      const startImageSwipe = () => {
           setTimeout(() => {
              let nextIndex = (imageIndex + 1) % imageArray.length
              setImageIndex(nextIndex)
          }, SWIPE_INTERVAL)
      }

      return (
          <div className="swip-container">
              {imageIndex === 0 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
              {imageIndex === 1 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
              {imageIndex === 2 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
          </div>
      )
  }

  export default ImageSwiper;
        	        `}
                </pre>
            </div>
            <br />
	        <p>useStateで画像のIndexを管理しています。</p>
	        <p>処理的には、</p>
	        <p>useEffectを使用してレンダリングされたタイミングをHookし、</p>
	        <p>SWIPE_INTERVALで定義された時間経過後にuseStateを更新するようにしています。</p>
	        <p>つまり、useStateの更新→レンダリングが走る→タイマーが走る</p>
	        <p>→タイムアウトでuseStateが更新→レンダリングが走る・・・の繰り返しですね。</p>
	        <br />
            <div className="code-ref">
                <pre>
                    {`
  {imageIndex === 0 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
  {imageIndex === 1 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
  {imageIndex === 2 && <img className="image-container" src={imageArray[imageIndex]} alt="" />}
	                `}
                </pre>
            </div>
    	    <br />
	        <p>こんな感じで単純にsrc属性に設定するパスを更新するのではなくて</p>
	        <p>エレメント自体を切り替えているのは、パスを切り替えるだけでは</p>
	        <p>アニメーションが動かなかったからです。</p>
	        <p>パス切り替えるだけでなんとかできないかといろいろ試してはみたんですが・・・・</p>
            <br />
            <br />
        </div>
    )
}
export default Article006