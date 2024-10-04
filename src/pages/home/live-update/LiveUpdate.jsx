import React from "react";
import "./LiveUpdate.css";

export default function LiveUpdate() {
  return (
    <div className="container">
      <div id="live-update-container">
        <div id="live-update">Live Update</div>
        <div id="recent-live">
          <div id="left-triangle"></div>
          <div id="rectangle">
            <div className="date-time">
              <div className="date">Thursday </div>
              <div className="time"> 10:00 AM</div>
            </div>
            <div className="date-time">
              <div className="date">Friday </div>
              <div className="time"> 09:00 PM</div>
            </div>
          </div>
          <div id="right-trinagle"></div>
        </div>
        <button id="join-live-btn">Join Live</button>
      </div>
    </div>
  );
}
