import React, { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

function App() {
  const [username, setUsername] = useState("");

  console.log(username);
  console.log("re-rendered");
  return (
    <>
      <div className="app">
        <form>
          <FormInput placeholder="Username" setUsername={setUsername} />
          {/* mesela yukarda setUsername={setUsername()} dediğim zaman infinite loop hatası verdi bunu araştırmalıyım. */}
          <FormInput placeholder="Email" />
          <FormInput placeholder="Full Name" />
          <FormInput placeholder="Sth else" />
        </form>
      </div>
    </>
  );
}

export default App;
