module.exports = {
  aws: {
    auth: {},
    endPoint: [
      {
        name: "MyCustomLambda",
        endpoint: "https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/yourFuncName/invocations",
        service: "lambda",
        region: "us-east-1"
      }
    ]
  }
};
