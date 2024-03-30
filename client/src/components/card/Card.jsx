import React, { useState } from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import HeartFilled from "../../img/heartFilled.svg";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  const removeLiked = () => {
    setLiked(false);
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="User image" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="Post image" className="postImg" />
      <div className="interaction">
        {liked ? <img src={HeartFilled} alt="Heart icon" className="cardIcon" onClick={removeLiked} /> : <img src={Heart} alt="Heart icon" className="cardIcon" onClick={() => handleNotification(1)} />}

        <img src={Comment} alt="Comment icon" className="cardIcon" onClick={() => handleNotification(2)} />
        <img src={Share} alt="Share icon" className="cardIcon" onClick={() => handleNotification(3)} />
        <img src={Info} alt="Info icon" className="cardIcon infoIcon" onClick={() => handleNotification(4)} />
      </div>
    </div>
  );
};

export default Card;
