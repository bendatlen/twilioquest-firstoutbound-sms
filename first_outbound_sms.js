var accountSid = '##################################'; // My Test Account SID
var authToken = '################################';   // My Test Account Auth Token

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

// create message
client.messages.create({
    body: 'Greetings! The current time is: XXXXXX H3G0T25JFLBXSFT',
    to: '+44 #### #####',  // Text this number
    from: '+############' // From a valid Twilio number
})
.then((message) => console.log(message.sid));