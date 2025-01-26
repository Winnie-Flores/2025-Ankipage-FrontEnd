export function More(){
    const handleLogOut=()=>{
        window.close()
    }
    const handleSwitchAccount=()=>{
        window.open(chrome.runtime.getURL('src/pages/login.jsx'), '_blank');
    }
    return(
        <div>
            <button onClick={handleLogOut}>log out</button>
            <button onClick={handleSwitchAccount}>switch accout</button>
        </div>
    )
}