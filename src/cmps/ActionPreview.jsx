import React, { useState } from "react";
import SvgIcon from "./SvgIcon";
import NoteCmp from "./NoteCmp";
import CallCmp from "./CallCmp";
import DateCmp from "./DateCmp";
import MsgCmp from "./MsgCmp";
import LocCmp from "./LocCmp";
import { UseSendMsg } from "../customHooks/useSendMsg";

import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const ActionPreview = ({ action, user }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAction = (key, value) => {
    console.log(key, value);
  sendModalToParent(key, value);
  };

  const sendModalToParent = (key, value) => {
  console.log('sendModalToParent', key[value]);
    // UseSendMsg({ type: 'action_modal', data});
   
  };
  return (
    <button
      onClick={() => onAction(action, action.action)}
      className="reset-btn action-preview"
      title={action.title}
    >
      <SvgIcon iconName={action.icon} />
      {isModalOpen && (
        <div className="min-modal">
          <DynamicComponent data={user} type={action.action} />
        </div>
      )}
    </button>
  );
};

ActionPreview.propTypes = {
  action: PropTypes.shape({
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActionPreview;

// eslint-disable-next-line react/prop-types
const DynamicComponent = ({ type, data }) => {
  switch (type) {
    case "note":
      return <NoteCmp data={data} />;
    case "call":
      return <CallCmp data={data} />;
    case "dates":
      return <DateCmp data={data} />;
    case "msg":
      return <MsgCmp data={data} />;
    case "location":
      return <LocCmp data={data} />;
    default:
      return <div>Unknown type</div>;
  }
};
