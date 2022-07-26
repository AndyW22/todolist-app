# Full stack ToDo List

[Live version](https://main.dryxabv9qc6ey.amplifyapp.com)

//lucille app on : https://main.dl02cdancx9ca.amplifyapp.com/

Full stack ToDo List made with the following:

- React with TypeScript
- Redux with Redux Toolkit + persist
- GraphQL API
- AWS Amplify, AppSync, Cognito, DynamoDB
- Styled Components with dark mode toggler

ToDos are stored on a DynamoDB table with Cognito user pools authorization.

This app has user authentication with email verification where each user has their own unique ToDo list which only they can access.

# Setup your own GraphQL API & DynamoDB table with Amplify

_This project is eligible for AWS Free tier_

To have your own ToDo list database, first install AWS Amplify CLI by following the instructions [here](https://docs.amplify.aws/cli/start/install).

Once configured, run the following command and select GraphQL API where applicable:

`amplify init`

- if prompted to change node js version, select no as this will cause a bug with the cloudformation template
- You don't need to configure advanced options.

This should initialize amplify and add the `aws-exports.js` file.

Since the GraphQL API schema and authentication has already been configured, you only need to run:

`amplify push`

to push all of the changes to the cloud.

You can view the schema in amplify > backend > api > todolist > schema.graphql. This uses @auth model to allow access depending on the user.

Finally, run

`yarn install` or `npm install`

and

`yarn start` or `npm start`

## Troubleshooting

To check everything is working correctly, there should be no error 400s in the console on page load. If there is, it means there is no cognito user pool on AWS for your application or, auth hasn't been initialized. To check, go to your application on AWS Amplify, and initialize the admin UI backend. This will display your authentication status.

Try and create an account. If you get an error saying the user pool does not exist, run

`amplify pull`

and check that your team-provider-info.json is using the same backend environment as on the console.

### Verification Email

If you don't get a verification email when signing up, go to Cogntio on the AWS console, select the user pool, then select MFA and verifications. Change the attribute to verify from phone to email.

## Add hosting

Optionally you can add hosting so the website is live, you can do this with `amplify add hosting` and `amplify publish`. Alterinatively, go to the application on the AWS Amplify section of the console and add continious deployment for the frontend environment
