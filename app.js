const express = require("express");
const path = require("path");
const app = express();
const connectToMongo = require('./db');
const port = 3000;
const nodemailer = require('nodemailer');
const cors = require('cors');
connectToMongo();



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.json());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))


// BOOKING API

app.use(cors())
// Available Routes
app.use("/api/date", require("./routes/date"));
app.use("/api/booking", require("./routes/booking"));

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index.pug', params);
});
app.get('/franchise', (req, res) => {
    const params = {}
    res.status(200).render('franchise.pug', params);
});
app.get('/event', (req, res) => {
    const params = {}
    res.status(200).render('event.pug', params);
});
app.get('/activities', (req, res) => {
    const params = {}
    res.status(200).render('activities.pug', params);
});
app.get('/privacy', (req, res) => {
    const params = {}
    res.status(200).render('privacy.pug', params);
});
app.get('/rental', (req, res) => {
    const params = {}
    res.status(200).render('rental.pug', params);
});

app.get('/calender', (req, res) => {
    const params = {}
    res.status(200).render('calender.pug', params);
});
app.get('/thank', (req, res) => {
    const params = {}
    res.status(200).render('thank.pug', params);
});

app.post('/', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "pixysquare72@gmail.com",
            pass: "kynuwotbooejnodz"
        },
        port: 465,
        host: 'smtp.gmail.com'
    })
    let mailOptions1 = {
        from: "pixysquare72@gmail.com",
        to: "lazer.craz@gmail.com",
        subject: `Message from ${req.body.name}: ${req.body.email}`,
        text: `Name: ${req.body.name}, 
        Email: ${req.body.email}, 
        Phone: ${req.body.phone}, 
        Type: ${req.body.select1},
        Message: ${req.body.message}`
    };
    transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log("Email sent: " + info.response)
            res.send('success')
        }
    })
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});