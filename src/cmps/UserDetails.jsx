import { useState, useEffect } from "react";
import { contactService } from "../services/item.service.local";
import ActionPreview from './ActionPreview'


const UseDetails = () => {
  const [user, setUser] = useState({
    username: "Guest",
    imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/66.jpg",
  });

//  console.log( import.meta.env)

  useEffect(() => {
    console.log("useDetails useEffect", user);
  }, [user]);

  window.addEventListener("message", (ev) => {
    getContactById(ev.data.payload.userId);
  });

  async function getContactById(contactId) {
    const user = await contactService.getById(contactId);
    setUser(user);
  }

  
  const userActions = [
    { title: "Dashboard", action: "dashboard", icon: "dashBoard" },
    { title: "Dates", action: "dates", icon: "calender" },
    { title: "Make a call", action: "call", icon: "call" },
    { title: "Location", action: "location", icon: "location" },
    { title: "Take a note", action: "note", icon: "note" },
    { title: "Send text message", action: "msg", icon: "chat" },
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
              <ActionPreview action={action} user={user}/>
            </li>
          );
        })}
      
      </ul>
    </article>
  );
};

export default UseDetails;
