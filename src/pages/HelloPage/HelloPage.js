import "./styles.css";
import love_main from "../../icons/love_main.svg";
import { useNavigate } from "react-router-dom";

export const HelloPage = () => {
  const navigate = useNavigate();
  // const tg = window.Telegram.WebApp;
  // const onClose = () => tg.close();
  const goNext = () => navigate("/reg");
  return (
    <div className="content">
      <img src={love_main} width="128px" height="128px" />
      <div>
        <div className="name">YooYooMatch</div>
        <div className="desc">
          Привет! Это новый бот для знакомств в tg! С более удобным функционалом
        </div>
      </div>

      <button className="bt" onClick={goNext}>
        Погнали!
      </button>
    </div>
  );
};
