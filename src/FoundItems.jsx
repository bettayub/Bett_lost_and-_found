import React, { useState, useEffect } from 'react';
import './FoundItems.css';
import Navbar from './Navbar';

function FoundItems() {
  const [foundItems, setFoundItems] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState([]);
  const [claimedItem, setClaimedItem] = useState(null);
  const [status ,setStatus] = useState("not claimed")
  // const [itemid ,SetItemid] = useState("")
  // const [user_id ,SetUserid] = useState("")
  // const [status , setStatus] = useState("notclaimed")
  
  // const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    fetch('http://127.0.0.1:5555/lost&found/found_items') // Replace 'https://example.com/lost-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoundItems(data);
        // SetItemid(data.id) ;
        // SetUserid(data.user_id)
        setCommentsVisible(new Array(data.length).fill(false))
      })
      .catch((error) => {
        console.error('Error fetching found items:', error);
        // Handle errors as needed
      });
  }, []); 
  
 
  const handleSubmit = (e, item) => {
    e.preventDefault();
  
    if (!item) {
      alert("Please select an item before claiming.");
      return;
    }
  
    fetch('http://127.0.0.1:5555/lost&found/claimitem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item_name: item.item_name, user_id: item.user_reported_id , status: status})
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error:', error));
  };
  
  const toggleComments = (index) => {
    const updatedCommentsVisible = [...commentsVisible];
    updatedCommentsVisible[index] = !updatedCommentsVisible[index];
    setCommentsVisible(updatedCommentsVisible);
  };


  return (
    <div className='foundItems'>
      <div className='FoundItem-card'>
        {foundItems.map((data, index) => (
          <div 
          className='card' key={index}>
            <p>Category: {data.item_description}</p>
            <h3>Found Item: {data.item_name}</h3>
            <button onClick={(e)=>handleSubmit(e ,data)}>
              Claim
            </button>
            <button onClick={() => toggleComments(index)}>
              {commentsVisible[index] ? 'Hide Comments' : 'Show Comments'}
            </button>

            <div className="commentSection" style={{ display: commentsVisible[index] ? 'block' : 'none' }}>
              <input type="text" placeholder="Add a comment" className="commentInput" />
              <button className="postCommentButton">Post Comment</button>
              <div className="commentList">
                {/* Sample comment list rendering logic */}
                <p>Comment 1</p>
                <p>Comment 2</p>
                {/* Add your comment mapping logic here */}
              </div>
            </div>

            <img src={data.image} alt={`Image of ${data.foundItem}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundItems;
