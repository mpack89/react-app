import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
