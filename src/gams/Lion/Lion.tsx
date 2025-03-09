import { useEffect, useState } from "react";
import lionStyle from "./lion.module.css";

function Lion() {
  const [htmlEle, setHtmlEle] = useState("");

  useEffect(() => {
    fetch("../../../public/Lion/index.html" + '?timestamp=' + Date.now())
    .then(response => response.text())
    .then(html => {
      setHtmlEle(html);
    });
  }, [])

   
  return(
    <div className={lionStyle['lion-wrap']}>
      <div className={lionStyle['game-title']}>按住产生风，小狮子一定会很舒服</div>
      <iframe srcDoc={htmlEle} title="Lion"  style={{width: '100vw', height: '100vh'}}/>
    </div>
  )
}

export default Lion;