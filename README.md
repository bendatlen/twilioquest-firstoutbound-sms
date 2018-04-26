Basic node.js application using Twilio to send an outbound SMS

## Dependencies
This app uses process.env variables (not included int this repository) that need to be set in a project .env file.  Make a .env file in your project folder and create two variables called accountSID and authToken and populate these with your Twilio account SID and Auth Token for your Twilio account.

**Example**  
`accountSID=<enter your twilio account SID>` 
`authToken=<enter your twilio auth Token>`   

## Requirements
[NodeJS and NPM](http://nodejs.org/download)   

## Related modules
[twilio](https://www.npmjs.com/package/twilio) - Twilio helper library for node   
[dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology   

## License
None


