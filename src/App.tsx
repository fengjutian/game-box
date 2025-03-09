import "./App.css";
import { NavLink } from "react-router";
// import LionComp from "./gams/Lion/Lion.tsx";

function App() {
  const goGame = (gameName: string)  => {


  }

  return (
    <div>
      <h1>欢迎来到小游戏世界</h1>
      <h2>点击下方游戏名称进入游戏</h2>
      <div>
        <div>
          <NavLink to="/lion" end>
            爱吹风的小狮子
          </NavLink>
        </div>
        <div>
          <NavLink to="/king" end>
            杀死国王
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;