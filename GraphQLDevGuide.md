# GraphQL Development Guide
## Introduction
This document outlines how to:
	- Write GraphQL queries that are connected to AWS AppSync
	- Write resolvers in AWS Lambda
	- Write code in the FreshPass app that can contact AWS AppSync

## What is GraphQL
GraphQL is a query language that we are using to send requests from the front end (the client side app) to the back end (the program we have running on AWS Lambda). There are many other implementations that we could have chosen to send information over the network - the most common of which being REST. REST APIs work by sending one of 4 actions (Create, Read, Update, and Delete) to the server via a url scheme that identifies the resource we want to effect on the server side. 

This is contrasted with something like GraphQL. With GraphQL, you simply write out the format for the query or mutation that you want to carry out, and then both those working on the server side code and the client side code have the same understanding of what is getting passed.

Overall, we could have chosen REST instead as our API format - however we simply prefer the format of GraphQL. It feels like it makes it easier for backend and front end engineers to know what to expect out of any request.

## Workflow
### Step 0: Development Environment
- Before programming, you need to make sure that:
	- The following dependencies are installed (if you are writing frontend code):
		- `npm install @apollo/client graphql`
		- `npm install graphql-tag`
		- `npm install react-apollo --legacy-peer-deps`
		- `npm install aws-appsync --legacy-peer-deps`
		- `npm install aws-appsync-react --legacy-peer-deps`
		- `npm install @react-native-community/netinfo --legacy-peer-deps`
		- `npm install events --legacy-peer-deps`
		- `npm install @react-native-async-storage/async-storage`
		- `npm install apollo-link --legacy-peer-deps`
		- `npm install aws-appsync-auth-link --legacy-peer-deps`
		- `npm install apollo-link-http --legacy-peer-deps`
	- Once the dependancies are installed, run this command:
		- `npx react-native link @react-native-async-storage/async-storage`
	- Make sure that the database is on
### Step 1: Writing GraphQL Code in AppSync
All GraphQL queries will be declared in AppSync. To do this,

1. Launch AWS AppSync from the AWS Console
2. Open the "Schema" Tab
3. For any data type that you will be using, you will need to define the type.
	- Before I explain how to do this, for any type that you’re defining, double check that it has not already been defined. If it hasn’t, move on to the next bullet point
	- GraphQL uses a simple JSONesque format to define types. Each value is defined by the format `nameOfElement: DataType`, with an optional `!` argument that, when used, means that the element is non-nullable. Use this format to define the values in your data type.
4. Define your query or mutation by adding a new line into the cooresponding `Query` or `Mutation` type
	- The format for these are `functionName(nameOfElement1: DataType1, nameOfElement2: DataType2, ...): ReturnType `
5. To your newly defined query or mutation, add an additional argument called `name`, that is of type `String!`
	- The reason why we add this is that lambda has no functionality built in to detect what query or mutation called it. As a result, we need to somehow inform lambda what query needs to be ran whenever we call it - so we simply supply the name of the query in the name argument. This will be explained in later sections as well, but for now, make sure that you have that field
	![Example of some entries in the `Query` type](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/query-example.png?raw=True)
6. Once you are finished adding in your GraphQL code,  you can push your code to AWS’s servers by clicking the “Save Schema” button
	![Before the schema is saved](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/presave-schema.png?raw=True)
	![After the schema is saved](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/saved-schema.png?raw=True)
7. The final step is to add the Lambda function as the resolver for the query -essentially this tells AppSync how to get a response for the query. This can be done in a few simple steps:
	- Navigate to your new query or mutation in the  “Resolvers” panel on the right of the schema,	and click the “Attach” button
	![The "Attach" Button](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/resolvers-attach.png?raw=True)
	- Click the “Data Source Name” dropdown
	- Select “LambdaLigma”
	- Click the “Save Resolver” button
	![The Resolver Settings Page](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/resolvers-settings.png?raw=True)

### Step 2: Write Server Code
You will now need to add the logic that the Lambda function will use to evaluate your DB call. There are two functions that you need to write for any given query or mutation:
- A function that can return the proper DB query
- A function that, when supplied with the DB’s response, returns the proper response for the lambda to return

1. Launch the “getParking” Lambda function
2. Scroll to the bottom, and find the section of code that’s denoted as either “QUERIES” or “MUTATIONS”. This is where your code will go. If you’re writing a query, then you will add your code to the “QUERIES” section, and if you’re writing a mutation, you’ll add your code to the “MUTATIONS” section.
	![The Queries code block](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/queries-in-lambda.png?raw=True)
3. Write a function that formats the SQL query you want to run. 
	![A sample query function](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/lambda-sql-query.png?raw=True)
4. Write a function that formats the structure of the response you want to return to AppSync. This will be some JSON object that supplies all the needed fields that are defined in the GraphQL schema on AppSync
	![A sample response function](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/lambda-resp-sample.png?raw=True)
5. Scroll up to the main handler function of the lambda function, and find the switch statement.
6. Add a case to the switch statement.
- Note: The switch statement will use whatever value is supplied in the `name` field of the graphQL query/mutation that was defined in AppSync. The reason why the `name` argument is supplied is because that’s the only way that the lambda can determine which query called it - so just make sure that every time the client app calls the query, the name argument it supplies matches the case that is defined here
7. In your new case in the switch statement, set `query` equal to the output of the function that defines the DB query you want to run
8. Set the `respFunc` variable to *the function that will return the response to your query*
- Notice that when defining the `query` variable, your case statement will be calling the function and then setting query equal to its return value, while the `respFunc` variable is actually a function itself. This is because `respFunc` cannot be called until we actually have the result from the DB call.
	![A sample of how the switch is formatted](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/lambda-switch-example.png?raw=True)
9. You’re now finished writing the server side code. To push your code to AWS’s servers, simply click the “Deploy” button
- Note: Do not use the orange “Test” button supplied in the Lambda function to test your code - it won’t work. This is because the Lambda’s built-in testing is done by defining a JSON object that will get passed in to the lambda. Defining that JSON object isn’t worth your time, since you can just test through AppSync and not have to write anything new. 
	![The lambda before the the changes are deployed](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/lambda-pre-save.png?raw=True)
	![The lambda after the the changes are deployed](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/lambda-save.png?raw=True)

### Step 3: Test Backend Code from AppSync
1. Launch AppSync and select the “Queries” tab
2. Select the query you just wrote, and enter in your test values
3. Click the play button to have your query be sent to the lambda function
	![Sample of the query being tested](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/testing-sample.png?raw=True)

### Step 4: Integrating GraphQL on the Client App
1. Get the query from AppSync
	- Open up AppSync, and navigate to the “Queries” tab
	- Select the query you want to implement, and only that query
	- For any arguments that will be passed as a variable from the client code, hover to the right of the variable’s declaration, and a `$` will appear. Click that, and then your argument should look as follows

	![Sample of how the code looks when the dollar sign is being used](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/get-id-dollar-sign.png?raw=True)

	- Hard code in any values that need to be passed to the backend, but are not going to be variable. For every query, there will be at least one of these - the queries name

	![Sample of how the code looks when you hard code in a value](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/hard-code-name.png?raw=True)

	- Select the fields that you want to have returned

	![Sample of selecting fields](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/field-selection.png?raw=True)

	- For example, this is the final input for the `getUserByID` query

	![Another field selection](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/field-selection-2.png?raw=True)

	- This will generate a query on the other side of your screen, that will look something like what I’ve shown below. Copy that whole thing.
		
	![Sample generated query](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/sample-generated-query.png?raw=True)

2. Add the query or mutation to the proper file that is predefined in the client project ( `freshpass/MyApp/src/graphql/queries.js` or `freshpass/MyApp/src/graphql/mutations.js`)
	- Essentially, follow the format below, except any arguments that were passed in to `MyQuery` that are expecting a text input, switch those to be expecting a variable
	- In our example, the signature  `query MyQuery($id: ID = "") ` was created from AppSync. We want to switch that to be `query MyQuery($id: ID!)` instead
	- For more details about the formatting, refer to [this website](https://www.apollographql.com/docs/react/data/queries/)

	![Sample query in code](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/sample-query-in-code.png?raw=True)

3. Import the query with  `import { queryName } from '../graphql/queries';` wherever you are planning on using the code
	![Sample import](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/import-statement.png?raw=True)
4. Call the query in the code
	- Follow the format photographed below	
	![Sample call in code](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/sample-call.png?raw=True)
	- When you are actually implementing your code, you might want to write this as a function, and then supply the argument as a prop
	![Sample of function usage](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/sample-function.png?raw=True)
5. Run your code to verify that it's working
![Screenshot of code](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/screenshot-sample.png?raw=True)


