import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './PendingClaims.css';


function PendingClaims() {
  const [Claimeditems, setClaimedtems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/lost&found/pendingclaim_items') // Replace 'https://example.com/lost-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClaimedtems(data);
      })
      .catch((error) => {
        console.error('Error fetching lost items:', error);
        // Handle errors as needed
      });
  }, []); // Empty dependency array to run the effect only once

const Handleonapprove = (e)=>{
 
}



  return (
    <>
    <h1
      style={{
        fontFamily: "cursive",
        textAlign: "center",
        fontWeight: "lighter",
        marginTop: "2rem",
        fontStyle: "italic",
      }}
    >
      Claimed waiting for your approval
    </h1>
    <div className="tablediv">
      <table
        id="pendingclaims"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0px 10px",
          borderRadius: "15px",
          margin: "2rem",
          width: "80%",
        }}
      >
        <tbody>
          <tr>
            <th>#</th>
            <th>Itemname</th>
            <th>Reported_by</th>
            <th>Status</th>
            <th>Approve</th>
          </tr>

          {Claimeditems.map((item, index) => (
            <tr key={item.id}>
              <td style={{ marginBottom: "10px" }}>{index + 1}</td>
              <td>
               {item.item_name}
              </td>
              <td>{item.user_id}</td>
              <td>{item.status}</td>
              <td
                onClick={Handleonapprove}
              >Approve</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);
}

export default PendingClaims;
