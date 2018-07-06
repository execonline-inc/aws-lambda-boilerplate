# aws-lambda-boilerplate
Use this boilerplate to get started creating your next Lambda function with Node.js

## Setup

Install nvm if you don't already have it installed.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Install Node (v8.10).
```
nvm install 8.10
nvm use 8.10
```

Clone the boilerplate and rename the repository.
```
git clone git@github.com:execonline-inc/aws-lambda-boilerplate.git
cp -r aws-lambda-boilerplate your-lambda-name
cd your-lambda-name
rm -rf .git
```

Install yarn if you don't already have it installed (https://yarnpkg.com/lang/en/docs/install/#mac-stable). Then, install the dependencies
```
yarn install
```


## Development

Run ``serverless invoke local`` to run a lambda function locally on your machine. In order to use serverless in the command
lines, you will need to use npm to install servleress globaly.

```
npm install -g serverless
```

Then, to run the test handler function:

```
serverless invoke local --function test
```

## Deployment

#Deploy a Service:
Use this when you have made changes to your Functions, Events or Resources in serverless.yml or you simply want to deploy all changes within your Service at the same time.
```
serverless deploy -v
```

#Deploy the Function:
Use this to quickly upload and overwrite your AWS Lambda code on AWS, allowing you to develop faster.
```
serverless deploy function -f hello
```
