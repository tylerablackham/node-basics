# Learning Some Node Basics

## Some Notes on Node and NPM

### Node.js
- An open-source, cross-platform JavaScript runtime environment
- Allows JavaScript to be used in server-side applications
- Built to handle many asynchronous activities

Node.js is a runtime environment
- It is a software framework that provides infrastructure and resources for executing programs
- It serves as an intermediary layer between the hardware and the software application

Node.js uses an event driven, non-blocking I/O model
- Event-driven: reacting to events as they occur
- Non-blocking: program doesn't halt while waiting for non-JavaScript operations
- I/O (Input/Output) model: interaction between CPU and external devices/resources
- Essentially, Node.js allows the program to handle multiple I/O tasks concurrently without waiting for one to complete

Node.js allows developers to write server-side applications using JavaScript
- JavaScript was originally for front-end only
- Promotes code reuse and consistency across the full-stack

Node.js is single-threaded but has an event loop to manage asynchronous operations
- Single-threaded: uses only one main execution thread to carry out tasks
- Event-loop: a continuous loop that runs throughout the lifetime of the application and handles certain events
- While Node.js only has one execution thread, the event-loop allows for it to handle multiple I/O tasks without 
blocking the main execution thread.

### NPM
- The default package manager for Node
- Node packages help share modules between Node developers

Package Management
- Allows developers to install packages directly into their projects. These packages can be libraries, frameworks,
tools, etc. 
- Developers manage dependencies for their project in the `package.json` file, which lists all the dependencies 
for the project to run.

Script Execution
- npm also allows for the creation of custom scripts in the `package.json` file.
- These scripts can be run by using `npm run <script name>` or by clicking the play button next to
the script definition in the `package.json` file

## Some Application Help

### Using Node

Make sure you have node installed. Run `node -v` to verify that it is installed correctly.

Now we can create a test script. I created a file called `basic.js`, but the only important part is the `.js` extension.
In that file, you can write some simple JavaScript code, such as a `console.log` statement.

Next we can run that script by running `node basic.js` in the terminal. 

### Using NPM

Make sure you have npm installed. It should come bundled with Node.js, but you can run `npm -v` to verify that it is 
installed correctly.

Next we need to create a `package.json` file to manage the project's dependencies and metadata. You can run `npm init`
in the terminal to create one. Follow the prompts to set it up.

We can then install packages using `npm install`. For example, I installed the Express.js framework by running 
`npm install express`. Doing this will also create a `package-lock.json` file. You don't need to worry about doing
anything with that file. 

We can access installed packages using `require()`. Check the `basic.js` file for an example of using the express package