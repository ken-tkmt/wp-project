import './Entrance.css'
import './HeaderParts.css'
import { articles } from './Entrance'

const EntranceLeftPain = (props) => {

    // 左ペイン 記事番号（2桁表示）
    const getArticleNumber = (index) => {
        let text = '00' + String(index)
        return text.substr(text.length - 2, 2)
    }
    // 左ペイン　リスト項目
    const buildArticleListItem = (title, index) => {
        const articleNum = getArticleNumber((index + 1))
        const listItem =  `${articleNum}. ${title}`
        return listItem
    }
    const onClickAction = (event) => {
        let splits = event.currentTarget.outerText.split('.')
        props.callback(Number(splits[0]))
    }
    const getArticlesList = () => {
        return articles.map((title, index) => {
            return <li className="article-text" onClick={onClickAction} key={index}>{buildArticleListItem(title, index)}</li>
        })
    }
    return (
        <div className="left-pain-article-list">
            <div className="left-pain-title-text">記事一覧</div>
            <ul className="article-list">
                {getArticlesList()}
            </ul>                    
        </div>
    )
}
export default EntranceLeftPain