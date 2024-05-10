import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart object from Chart.js library
import FetchCropName from './FetchCropName';
import { backendurl } from '../constant';
const PieChart = () => {
  const [pieChartData, setPieChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token= getTokenFromStorage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/predictioncount`);
        setPieChartData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <h2><FetchCropName token={token}/></h2>
      {loading ? (
        <p>Loading...</p>
      ) : pieChartData ? (
        <Pie
          key={Math.random()} // Generate a unique key
          data={{
            labels: Object.keys(pieChartData),
            datasets: [
              {
                label: 'Prediction Values',
                data: Object.values(pieChartData),
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
              },
            ],
          }}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PieChart;
function getTokenFromStorage() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "token") {
      return value;
    }
  }
  return null;
}