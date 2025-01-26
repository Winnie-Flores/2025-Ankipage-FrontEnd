

export function Login(){
    return(
        <div className="Background">
            <div className="mainCard">
                <div className="top">
                    <img className="icon"></img>
                    <span className="name">ANKIPAGE</span>
                </div>
                <div className="title">Welcome to ANKIPAGE.</div>
                <form className="loginForm">
                    <div className="box">
                        <img className="inputImg"></img>
                        <input type="email" className="email" placeholder="666666@qq.com"></input>
                    </div>
                    <div className="box">
                        <img className="inputImg"></img>
                        <input type="password" className="password" placeholder="666666"></input>
                    </div>
                    <input type="checkbox" className="rememberPassword">记住密码？</input>
                    <a href="" className="forgetPassword">忘记密码？</a>
                    <button type="submit" className="login">登录</button>
                </form>
                <div className="havenotAccount"><span className="havenot">还没有密码，</span><span className="goToRegister"><a href="#" className="goToRegister">立即注册</a></span></div>
            </div>
        </div>
    )
}