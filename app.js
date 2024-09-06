const express = require('express')
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');0
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { title: 'My Website' });
});

// About Us route (renders about.ejs)
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Contact Us route (renders contact.ejs)
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Form submission route
app.post('/submit', (req, res) => {
    // Handle form submission
    res.send('Form submitted!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});