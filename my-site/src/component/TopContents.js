import './TopContents.css'

const TopContents = (props) => {
    return (
        <div className="top-page-container">
            <h2 className="page-title">Let's Step by Step!!</h2>
            <p className="title-memo">知らなかったことや疑問に思ったことをメモ書きっぽく残していく自分用メモです。</p>
            <div className="button-container">
                <a className="menu-button" onClick={() => props.callback(1)}>メモ書きを見る</a>
            </div>
        </div>
    )
}
export default TopContents