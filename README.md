# eSponse
A full-stack MERN web application that allows customers to generate email templates that are sent as surveys to record user feedback.

This app is currently in development. The heroku cloud platform is used to build and run the production version of eSponse, and the current working iteration can be found at https://esponse.herokuapp.com/.

To explore the application flow a user needs to purchase credits. I have left the credit api in test mode so that it can be used without making purchases. A dummy email can be used with the development credit card number 4242 4242 4242 4242, a FUTURE date, and any CVC three-digit number.  When making a survey simply add an easily accessible email address (i.e. your email address) to the recipients list.


Front-End
=====================================
eSponse client-side uses the React.js framework with redux in the Node.js environment.
The styling is still undergoing development, however as of now it includes the materialize css,
webpack, stripe API, redux forms, redux thunk, regex email validation.


Back-End
=====================================
On the server-side, eSponse is a survey based application that uses MongoDB to record survery documents, 
and recipient responses. For the business logic layer Node.js is used with Express.js to communicate between React and Mongo 
outside of the browser via HTTP requests via JSON.

eSponse includes (so far) google user sign-in using Passport.js to support oauth user validation via the Google+API.
In order to use the emailing features the user must purchase credits (via the Stripe API). Then the sendgrip emailing sevice 
is used to send survey emails to the recipients.
