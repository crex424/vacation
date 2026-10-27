// Import express module
import express from 'express';

// Initiate instance of express application
const app = express();

// Set applications port
const PORT = 3005;

// Show server where to find css and script files
app.use(express.static('public'));

// Define a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Add a confirm route to display a confirm view page
app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});