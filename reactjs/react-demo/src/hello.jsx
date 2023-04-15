import React, { useRef } from "react";

function App_demo() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus inpus</button>
    </div>
  );
}
export default App_demo;
