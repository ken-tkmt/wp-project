import './Article.css'
import ArticleBase from './ArticleBase'

const Article003 = (props) => {
    return (
        <div className="page-container">
	        <ArticleBase title={props.title}/>
	        <p>create-react-app を使用してReactアプリの初期テンプレートを作ろうとしても</p>
	        <p>テンプレートができない場合があります。</p>
	        <br />
	        <p>コンソールに出力されているログで様々原因ありますが、</p>
	        <p>ケース的に多いのは、バージョンが古いことのようです。</p>
	        <br />
	        <p>なので、グローバルインストールしたcreate-react-appをアンインストールして、</p>
	        <p>create-react-appを再度インストールすれば問題を回避できるようです。</p>
	        <br />
            <div className="code-ref">
    	        <pre>
                    {`
  npm uninstall -g create-react-app
  npx create-react-app <作成するフォルダ名>
	                `}
                </pre>
            </div>
        </div>
    )
}
export default Article003