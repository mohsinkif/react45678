import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../Components/AdminNavbar';
import { backendurl } from '../constant';
const ContactEntries = () => {
  const [contactEntries, setContactEntries] = useState([]);
// (`${backendurl}get_transporter`
  useEffect(() => {
    const fetchContactEntries = async () => {
      try {
        const response = await axios.get(`${backendurl}contact_entries`);
        setContactEntries(response.data.data);
      } catch (error) {
        console.error('Error fetching contact entries:', error);
      }
    };

    fetchContactEntries();
  }, []);

  return (
    <div>
    <AdminNavbar/>
    <div style={{ color: 'black', textAlign: 'center', padding: '20px' }}>
      <h2>Contact Entries</h2>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', border: '1px solid black' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Message</th>
    </tr>
  </thead>
  <tbody>
    {contactEntries.map((entry, index) => (
      <tr key={index}>
        <td style={{ border: '1px solid black', padding: '8px' }}>{entry.email}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{entry.message}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </div>
  );
};

export default ContactEntries;


export const loadFeedBack = async({params, request}) =>{

}


export const feedBackAction = async({params, request}) =>{

}