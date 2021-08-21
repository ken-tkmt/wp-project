import { useState } from 'react'
import Article001 from './article/Article001'
import Article002 from './article/Article002'
import './Entrance.css'
import EntranceLeftPain from './EntranceLeftPain'

export const articles = ['環境構築', 'JSXとは']

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
            </div>
        </div>
    )
}
export default Entrance