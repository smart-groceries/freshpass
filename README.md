# FreshPass Frontend

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

FreshPass is a mobile application that will allow to do all your grocery shopping online and have the quickest access to fresh products. 

> Note: There is a seperate backend user guide [here](https://github.com/smart-groceries/freshpass_backend)

## Tech
- [Apollo] - Frontend GraphQL client
- [React Native] - Frontend Framework
- [Ligma] - UI sandbox
- [TypeScript] - Frontend Programming Language

## Installation
First you must follow the installation proccess for your platform for [React-Native](https://reactnative.dev/docs/environment-setup). 
> Note: You must do the installation in the MyApp folder 

 Then install the react native package using NPM 
```sh
npm install react-native
```
Install the AWS CLI 
[Link Here](https://aws.amazon.com/cli/)
### _Run_
In order to run the app you can run the application by just using the run-android command, but to run Metro in a seperate console use this
```sh
npx react-native start
```
Then to build and run the application use
```sh 
npx react-native run-android 
```
## Development
### Environment Setup
If you are having issues with the android building the gradle try 

```sh
cd android
./gradlew clean
```
Install React Native Dependecies
> Bruh can yall stop adding so many dependencies
```sh
npm install react-native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install @freakycoder/react-native-bounceable
npm install react-native-numeric-input --save
npm install --save react-native-vector-icons --legacy-peer-deps
npm install react-native-maps --save-exact
npm install lottie-react-native
npm install react-native-popup-menu --save
npm install @react-native-picker/picker --save
npm install @apollo/client graphql
npm install graphql-tag
npm install react-apollo --legacy-peer-deps
npm install aws-appsync --legacy-peer-deps
npm install aws-appsync-react --legacy-peer-deps
npm install @react-native-community/netinfo --legacy-peer-deps
npm install events --legacy-peer-deps
npm install @react-native-async-storage/async-storage
npm install apollo-link --legacy-peer-deps
npm install aws-appsync-auth-link --legacy-peer-deps
npm install apollo-link-http --legacy-peer-deps
npm install react-native-google-places-autocomplete
npm install aws-sdk
```
### Connecting to the backend
We are using GraphQL to send queries to our backend, which is set up to recieve these calls through AWS AppSync and to be handled by AWS Lambda.

[Click here](https://github.com/smart-groceries/freshpass/blob/main/GraphQLDevGuide.md) to go see our comprehensive guide to querying the backend.


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Apollo]: <https://www.apollographql.com/docs/>
[Ligma]: <https://www.figma.com/>
[React Native]: <https://reactnative.dev/>
[TypeScript]: <https://www.typescriptlang.org/>
