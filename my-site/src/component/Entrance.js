import { useState } from 'react'
import Article001 from './article/Article001'
import Article002 from './article/Article002'
import Article003 from './article/Article003'
import Article004 from './article/Article004'
import Article005 from './article/Article005'
import Article006 from './article/Article006'
import './Entrance.css'
import EntranceLeftPain from './EntranceLeftPain'

export const articles = [
    '環境構築', 
    'JSXとは',
    'create-react-appでテンプレートが作れない',
    'useState',
    'useEffect',
    'Swiperを作ってみた']

const Entrance = (props) => {
    const [articleNumber, setArticleNumber] = useState(1)

    const onItemClicked = (itemNum) => {
        if (itemNum !== articleNumber) {
            setArticleNumber(itemNum)
        }
    }
    return (
        <div className="entrance-container">
            <div className="entrance-left-pain">
                <EntranceLeftPain callback={onItemClicked}/>
            </div>
            <div className="entrance-right-pain">
                {articleNumber === 1 && <Article001 title={articles[(articleNumber - 1)]} />}
                {articleNumber === 2 && <Article002 title={articles[(articleNumber - 1)]} />}
                {articleNumber === 3 && <Article003 title={articles[(articleNumber - 1)]} />}
                {articleNumber === 4 && <Article004 title={articles[(articleNumber - 1)]} />}
                {articleNumber === 5 && <Article005 title={articles[(articleNumber - 1)]} />}
                {articleNumber === 6 && <Article006 title={articles[(articleNumber - 1)]} />}
            </div>
        </div>
    )
}
export default Entrance