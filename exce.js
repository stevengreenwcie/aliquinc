const axios = require('axios'); // Import Axios

// Define an async function to fetch data
async function fetchData(url) {
    try {
        const response = await axios.get(url); // Make GET request
        return response.data.result; // Return the 'result' field from the response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow error after logging it
    }
}

// Usage of the function
fetchData('https://api.example.com/data')
    .then(result => {
        console.log('Result:', result); // Handle successful response
    })
    .catch(error => {
        console.error('Request failed:', error); // Handle error
    });
