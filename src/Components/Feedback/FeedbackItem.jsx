import React from 'react';

const FeedbackItem = ({feedback}) => {
    const {post} = feedback;
    return (
        <div>
            <div>
                {/* <img src={img} alt="" /> */}
                <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                        {post}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackItem;