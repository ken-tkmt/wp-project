import './HeaderParts.css'


const pageTitle = '三流エンジニアのメモ書き'
const loginText = 'ログイン'
const HeaderParts = () => {

    return (
        <div className="header-container">
            <div className="header-parts-container">
                <div className="page-logo-block">
                    <img src="./img/sun-icon.png"  alt="" />
                    <h2>{pageTitle}</h2>
                </div>
                <div className="login-block">
                    <img src="./img/login-icon.png"  alt="" />
                    <span>{loginText}</span>
                </div>            
            </div>
            <div className="divider-line"></div>
        </div>
    )
}
export default HeaderParts;
