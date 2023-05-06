import { useEffect } from "react";

import "./App.css";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App"></div>;
}

export default App;
//2PLHWHDLMfdoXMUh6mPLH710PaW_3WBasB5mYKsPhXy4meiuj
