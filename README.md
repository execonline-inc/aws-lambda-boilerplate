# aws-lambda-boilerplate
Use this boilerplate to get started creating your next Lambda function with Node.js

## Installation

Install Node

```
nvm install
```

```
git clone git@github.com:execonline-inc/aws-lambda-boilerplate.git
cp -r aws-lambda-boilerplate your-lambda-name
cd your-lambda-name
rm -rf .git
```

`yarn install`

## Usage
aws-lambda-boilerplate is ES6 ready.  Functions in handler.js will execute. `serverless deploy` deploys function to AWS.

## Development
1. Test your function locally in a node console before attempting to deploy
1. `SLS_DEBUG='*' serverless webpack invoke --function test` to test with serverless locally.  You may need to set SLS_DEDUG: `export SLS_DEBUG='*'`
