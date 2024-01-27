import { useState, useEffect } from "react";
import SvgIcon from "./SvgIcon";

const UseDetails = () => {
  const [user, setUser] = useState({
    username: "Guest",
    imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/66.jpg",
  });

  useEffect(() => {
    console.log("useDetails useEffect", user);
  }, [user]);

  window.addEventListener("message", (e) => {
    console.log("e");
    setUser(e.data.payload);
  });

  const userActions = [
    { title: "Dashboard", action: "", icon: "dashBoard" },
    { title: "Dates", action: "", icon: "calender" },
    { title: "Make a call", action: "", icon: "call" },
    { title: "Location", action: "", icon: "location" },
    { title: "Take a note", action: "", icon: "note" },
    { title: "Send text message", action: "", icon: "chat" },
  ];
  return (
    <article className="user-details grid grid-dir-row grid-center">
      <img
        className="user-img"
        src={user.imgUrl}
        alt=""
        title={user.username}
      />

      <ul className="user-actions grid clean-list">
        {userActions.map((action, idx) => {
          return (
            <li key={idx} className="grid grid-center">
              <button className="reset-btn" title={action.title}>
                <SvgIcon iconName={action.icon} />
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default UseDetails;
