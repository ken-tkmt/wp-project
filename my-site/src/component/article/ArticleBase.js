import React from 'react'
import './Article.css'

const ArticleBase = (props) => {
    return (
        <React.Fragment>
            <h2 className="article-title">{props.title}</h2>
            <div className="title-divider"></div>
        </React.Fragment>
    )
}
export default ArticleBase