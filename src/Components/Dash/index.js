import React, { useEffect, useState } from "react";
import "./dash.css";
import Filter from "./Filter";

function Dash() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(`http://localhost:5000/posts`);
        const data = await res.json();
        if (data) {
          console.log(data);
          setPostData(data);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="dash">
      {/* <Filter /> */}
      {postData &&
        postData.map((item) => {
          return (
            <div className="postContainer">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <img
                src="https://lh3.googleusercontent.com/proxy/jhNbd9uWhAUkSDfU99vkJeufzNsFVIrkuFMJ_CZvZjLrqH3ZjeuZWqNEVghDfynw2t2zbzRtmMKzGGB7VkMxORP_jecnXyijIpYiH7jFv17fDtij5uflUtxDGb8o_zO5QkV8kywdwrF0Ymvsxlm5k6ojgnZrsRTV2EjF91gB-H_lEAx5DChnfNfyPqFyPw"
                alt="thumb up"
                className="votedown"
              />
              <p
                style={{
                  display: "inline-block",
                  float: "right",
                  marginRight: 10,
                  marginTop: 5,
                }}
              >
                {item.votes}
              </p>
              <img
                src="https://lh3.googleusercontent.com/proxy/jhNbd9uWhAUkSDfU99vkJeufzNsFVIrkuFMJ_CZvZjLrqH3ZjeuZWqNEVghDfynw2t2zbzRtmMKzGGB7VkMxORP_jecnXyijIpYiH7jFv17fDtij5uflUtxDGb8o_zO5QkV8kywdwrF0Ymvsxlm5k6ojgnZrsRTV2EjF91gB-H_lEAx5DChnfNfyPqFyPw"
                alt="thumb up"
                className="voteup"
              />
            </div>
          );
        })}
    </div>
  );
}

export default Dash;
