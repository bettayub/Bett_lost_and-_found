import React, { useState, useEffect } from 'react';
import './lostItems.css';
import Navbar from './Navbar';

function ReturnedItems() {
  const [returnedItems, setReturnedItems] = useState([]);

  useEffect(() => {
    fetch(' http://127.0.0.1:5555/lost&found/rewards') // Replace 'https://example.com/returned-items' with your API endpoint or local file
      .then((response) => response.json())
      .then((data) => {
        setReturnedItems(data);
        console.log(returnedItems);
      })
      .catch((error) => {
        console.error('Error fetching returned items:', error);
        // Handle errors as needed
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="lostItems bg-gray-100 min-h-screen p-4">
    
      <div className="cards-container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {returnedItems.map((data, index) => (
          <div className="card bg-white p-4 rounded-lg shadow-md" key={index}>
            <h3 className="text-xl font-bold mb-2">Lost Item: {data.lostitem_name}</h3>
            <h3 className="text-lg">Reward - $ {data.rewardamount}</h3>
          </div>
        ))}
      </div>
    </div>
  );
    

 
}

export default ReturnedItems;


//  return (
//     <div className='lostItems'>
//       <div className="cards-container">
//         {returnedItems.map((data, index) => (
//           <div className="card" key={index}>
//             <h3>Lost Item: {data.lostitem_name}</h3>
//             <h3>Reward - : ${data.rewardamount}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   // 