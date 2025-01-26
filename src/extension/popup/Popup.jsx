const Popup = () => {
  const handleLoginClick = () => {
    window.open(chrome.runtime.getURL('src/pages/login.jsx'), '_blank');
  };  

  return (
    <>
      <h1>Hello </h1>
      <button onClick={handleLoginClick}>Login</button>
    </>
  )
};

export default Popup;
