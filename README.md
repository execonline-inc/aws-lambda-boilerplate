# aws-lambda-boilerplate
Use this boilerplate to get started creating your next Lambda function with Node.js

## Installation
We recommend using the [Serverless](https://serverless.com/) framework.

`npm install serverless -g`

`serverless create --template aws-nodejs`

`npm install`

Add to serverless.yml
```
functions:
  entry:
    handler: handler.entry
  test:
    handler: handler.test
```

## Usage
aws-lambda-boilerplate is ES6 ready.  Functions in handler.js will execute. `serverless deploy` deploys function to AWS.

## Development
1. Test your function locally in a node console before attempting to deploy 
1. `SLS_DEBUG='*' serverless webpack invoke --function test` to test with serverless locally.  You may need to set SLS_DEDUG: `export SLS_DEBUG='*'`
