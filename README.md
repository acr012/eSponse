# eSponse
A full-stack MERN web application that allows customers to generate email templates that are sent as surveys to record user feedback.

This app is currently in development.

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

The heroku cloud platform is used to build and run the production application.
