import axios from 'axios';

const API_URL = 'http://localhost:6000/api/bfhl'; // Replace with your actual backend URL

export const postData = async (data) => {
    try {
        // Define axios request config explicitly
        const config = {
            method: 'post', // Set the HTTP method
            url: API_URL,   // Backend API URL
            headers: {
                'Content-Type': 'application/json',  // Explicitly set content type
            },
            data: data,  // The data to send in the POST request body
        };

        // Make the request using axios with config
        const response = await axios(config);
        console.log(response)
        
        // Return the response data
        return response.data;

    } catch (error) {
        // Improved error logging
        if (error.response) {
            console.error('Server error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error in setting up the request:', error.message);
        }

        // Return failure response
        return { is_success: false, message: 'Failed to process request.' };
    }
};
