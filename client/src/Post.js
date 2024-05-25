import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://media.istockphoto.com/id/1373210791/photo/rearview-of-parked-cars.jpg?s=612x612&w=0&k=20&c=RtaYQ7REicSGjsT9Wxg_wEwZQD1yQu6OJ-5HznqBskU=" />
      </div>
      <div className="texts">
        <h2>Full-House battery backup coming later this year</h2>
        <p className="info">
          <a className="author">Amar</a>
          <time>06-01-2024 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptates velit quasi temporibus, reprehenderit odio?
        </p>
      </div>
    </div>
  );
};

export default Post;
