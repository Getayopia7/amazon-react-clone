const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    'sk_test_51MLk0iCS4CdlkBIpdduagp5DF8WgBudE6iyKwimGXSHJVeBEXKhph1tB0LB4ANrJ4logwOvKj0Cw2gKsATJu6VvT00cYiw8H8A'
);

// app config
const app = express();

// middleware
app.use(cors({origin:true}));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async(request, response) => {
    const total=request.query.total;
    console.log('Payment Request Received for this amount >>>', total);
const paymentIntent=await stripe.paymentIntents.create({
    amount:total,
    currency: 'usd',
})


// ok created 
response.status(201).send({
    clientSecret:paymentIntent.client_secret,
});
});


//listen commands
exports.api=functions.https.onRequest(app)

 //http://127.0.0.1:5001/react-clone-36f72/us-central1/api

// download and import cors, express and stripe and listen 
// then use download emulator emulator /// firebase emulators: start-----
//emulators - it fake it like cloud function 