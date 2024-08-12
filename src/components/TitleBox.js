import React from "react";
import "./style/TitleBox.css";

function TitleBox(props) {
  return (
    <>
      <div className="box-container">
        <div className="line"></div>
        <div className="box">
          <p>{props.text}</p>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
}

export default TitleBox;
