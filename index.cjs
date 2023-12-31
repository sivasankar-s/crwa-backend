const express = require('express');
// const serverless = require('serverless-http');
const app = express();
const port = 3000;
const cors = require('cors'); // Choose an appropriate port

// const router = express.Router();

// Parse JSON request bodies
app.use(express.json());
app.use(cors());

// Define an API endpoint to receive data from your React component
app.post('/send-sms', (req, res) => {
  // Access the data sent from your React component
  const { title, location, phnNos } = req.body;

  // Use the Twilio library to send an SMS
  const accountSid = "AC4dee4863afba02e1b8f8365a22578ba2";
  const authToken = "f5cc96217318852a77a0615fb6dc0bea";
  const client = require('twilio')(accountSid, authToken);
//nochange
  phnNos.forEach(function(number){
    var message = client.messages.create({
      body: `${title}, happened on ${location} visit https://crime-alert.netlify.app/ ...`,
      from: '+12567332270',
      to: `+91${number}`
    })
    .then(message =>  console.log(message.status));
    // .done();
  });
  

  // client.messagesrouter
  // .create({
  //    body: `${title}, happened on ${location} visit website...`,
  //    from: '+12567332270',
  //    to: '+917812866727'
  //  })
  // .then(message => console.log(message.sid));

//   client.messages
//     .create({
});

app.get('/', (req, res)=>{
  res.json({
    'hello':'hi'
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use('/.netlify/functions/api', router);
// module.exports.handler = serverless(app);



    //twilio requirements -- Texting API 


    


// app.listen(4000, () => console.log("Running on Port 4000"))