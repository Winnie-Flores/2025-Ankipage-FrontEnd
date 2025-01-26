
const Popup = () => {
  const handleLoginClick = () => {
    window.open(chrome.runtime.getURL('src/pages/login.jsx'), '_blank');
  };  

  return (
    <>
      <h1>Hello from the Browser Extension Popup!</h1>;
      <button onClick={handleLoginClick}>Login</button>
    </>
    
  )
};

export default Popup;
