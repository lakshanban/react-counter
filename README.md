# react-counter
A simple counter application built using React!

### functionality

* This is a simple counter which will count upto 10
* And count down to 0 from 10
* Use the reset button to reset the timer 

### How to install

 1. Clone this repository using the below command: 
      <br> ``` git clone https://github.com/lakshanban/react-counter.git ```

2. Navigate into the project folder: 
      <br> ``` cd react-counter ```

3. Install the necessary dependencies using the node package manager:
      <br> ``` npm install ```

4. Once the dependency installation is completed run the below command to run the webpack server:
      <br>  ``` npm run start ```

By default this will start the application in port 3000

### Requirements 

* Node.js : v16.18.1 or higher (preferred)
* NPM: v8.19.2 or higher (preferred)

### Common issues
* Port already in use: 
   1. Kill the process running on the port
   2. Update the port number in webpack/webpack.config.js: 
```typescript
devServer: {
    port: 3000,
}
````
