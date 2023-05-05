import { useEffect } from "react";
import love_main from "./icons/love_main.svg";
import "./App.css";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => tg.close();

  return (
    <div className="App">
      <div className="content">
        <img src={love_main} width="128px" height="128px" />
        <div>
          <div className="name">YooYooMatch</div>
          <div className="desc">
            Привет, {tg?.initDataUnsafe?.user?.username}! Это новый бот для
            знакомств в tg! С более удобным функционалом
          </div>
        </div>

        <button className="bt" onClick={onClose}>
          Погнали!
        </button>
      </div>
    </div>
  );
}

export default App;
//2PLHWHDLMfdoXMUh6mPLH710PaW_3WBasB5mYKsPhXy4meiuj
