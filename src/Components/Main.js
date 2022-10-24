import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [changeCatImg, setChangeCatImg] = useState("");

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search").then((response) => {
      setImgUrl(response.data[0].url);
    });
  }, [changeCatImg]);

  const callImg = () => {
    setChangeCatImg(imgUrl);
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Gerador de gatos! 😺</h2>
        <br></br>
        <img src={imgUrl}></img>
        <br></br>
        <button onClick={() => callImg()}>Mais um!</button>
      </div>
    </div>
  );
};

export default Main;
