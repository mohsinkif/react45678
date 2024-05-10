import React, { useState, useEffect } from 'react';
import { backendurl } from '../constant';
const FetchCropName = ({ token }) => {
  const [cropName, setCropName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendurl}fetch_crop`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text(); // Use text() instead of json() to directly get the string response

        console.log(responseData); // Log the entire response data

        setCropName(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crop name:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]); // Dependency array to ensure useEffect runs when token changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : cropName !== null && cropName !== '' ? (
        <div className='className="title text-4xl font-bold text-center py-8"' style={{marginTop:"100px" , borderTop:'2px solid black'}}>Data Visualization For Crop: {cropName}</div>
      ) : (
        <p>No crop name available</p>
      )}
    </div>
  );
};

export default FetchCropName;
