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
```
[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Apollo]: <https://www.apollographql.com/docs/>
[Ligma]: <https://www.figma.com/>
[React Native]: <https://reactnative.dev/>
[TypeScript]: <https://www.typescriptlang.org/>