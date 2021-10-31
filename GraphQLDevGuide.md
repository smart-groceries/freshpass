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
		[Example of some entries in the `Query` type](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/query-example.png)
		6. Once you are finished adding in your GraphQL code,  you can push your code to AWS’s servers by clicking the “Save Schema” button
		[Before the schema is saved](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/presave-schema.png)
		[After the schema is saved](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/saved-schema.png)
		7. The final step is to add the Lambda function as the resolver for the query -essentially this tells AppSync how to get a response for the query. This can be done in a few simple steps:
			- Navigate to your new query or mutation in the  “Resolvers” panel on the right of the schema,	and click the “Attach” button
			[The "Attach" Button](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/resolvers-attach.png)
			- Click the “Data Source Name” dropdown
			- Select “LambdaLigma”
			- Click the “Save Resolver” button
			[The Resolver Settings Page](https://github.com/smart-groceries/freshpass/blob/main/dev-guide-images/resolvers-settings.png)
