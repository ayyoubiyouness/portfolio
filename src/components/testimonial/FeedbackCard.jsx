import "./feedbackCard.scss";
import React from 'react';


const FeedbackCard = ({ content, name, title, img }) => {
    return (
        <div className="feedback-card">
            <img
                src="https://i.imgur.com/rx3eOUo.png"
                alt="double_quotes"
                className="double-quotes"
            />
            <p className="feedback-content">
                {content}
            </p>
            <div className="feedback-person">
                <img src={img} alt={name} className="profile-picture" />
                <div className="person-details">
                    <h4 className="person-name">
                        {name}
                    </h4>
                    <p className="person-title">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;

