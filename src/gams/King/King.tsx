import { useEffect, useState } from "react";
// import lionStyle from "./lion.module.css";

function King() {
  const [htmlEle, setHtmlEle] = useState("");

  useEffect(() => {
    fetch("../../../public/King/index.html" + '?timestamp=' + Date.now())
    .then(response => response.text())
    .then(html => {
      setHtmlEle(html);
    });
  }, [])

   
  return(
    <div>
      <iframe srcDoc={htmlEle} title="killking"  style={{width: '100vw', height: '100vh'}}/>
    </div>
  )
}

export default King;