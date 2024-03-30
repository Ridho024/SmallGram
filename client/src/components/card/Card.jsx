import React, { useState } from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import HeartFilled from "../../img/heartFilled.svg";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = () => {
    setLiked(true);
  };

  const removeLiked = () => {
    setLiked(false);
  }

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="User image" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="Post image" className="postImg" />
      <div className="interaction">
        {liked ? <img src={HeartFilled} alt="Heart icon" className="cardIcon" onClick={removeLiked} /> : <img src={Heart} alt="Heart icon" className="cardIcon" onClick={handleNotification} />}

        <img src={Comment} alt="Comment icon" className="cardIcon" />
        <img src={Share} alt="Share icon" className="cardIcon" />
        <img src={Info} alt="Info icon" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
