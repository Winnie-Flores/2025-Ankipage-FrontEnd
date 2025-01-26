export function Sidepanel(){
    const handleMoreClick = () =>{
        window.open(chrome.runtime.getURL('src/pages/more.jsx'), '_blank');

    }

    
    return(
        <div>
            <div>ANKIPAGE.</div>
            <button onClick={handleMoreClick}>More</button>
        </div>
        
    )
}