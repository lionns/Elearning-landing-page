import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="w-10 h-10 bg-pink-gradient"></div>
      <h1 className="text-3xl font-bold underline bg-purple">Hello world!</h1>
    </>
  );
}

export default App;
