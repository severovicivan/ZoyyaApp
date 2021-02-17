# zoyya-code-exercise

* [Getting started](#getting-started)
* [About this repo](#about-this-repo)
* [The exercise](#the-exercise)

## Getting started

1. Install [Node.js](https://nodejs.org/en/) 
2. Clone this repo: `git clone git@github.com:ZoyyaApp/zoyya-code-exercise.git`
3. Install dependencies: `cd zoyya-code-exercise && npm install`
4. Start the app with `npm run`

Now you'll have a local app running! Follow along to the next section
to learn more about how this project is organized.

## About this repo

### React app

This exercise is using [React.js](https://reactjs.org/docs/hello-world.html) components. *If you're not familiar with React, don't worry, the exercise is simple enough, and basic knowledge of javascript, HTML and CSS should be enough to complete it. Also, we'll take your experience into account when reviewing the exercise ;)*

All frontend code is located in `./src/App.js` file. You'll find a simple conditional there which renders the `locationsList` or `locationDetail` based on the state of the component. Since we didn't want to introduce any routing logic for this exercise, the simplest way to render different views is use to change the state in the `App.js` component. However, if you would prefer to introduce some routing, you are free to do so.

The app is using plain CSS for styles, which is located in `./src/App.css`. Feel free to add your styles there, or organize them in a different way. If you have experience with `styled-components` feel free to use that instead.

### The data

The data you'll be using for this exercise is located in `./src/database`. There you'll find the `locations.json` file which has all the locations and their information you'll need for this exercise (name, description, image, teammembers...).


## The exercise

We expect these tasks to take about 3 hours, but they may take less for you. Please don't feel you need to spend more than 3 hours on this, the purpose of this exercise is for us to get a feel for your JS/HTML/CSS knowledge, we don't expect the final result to look exactly like the one in the screenshots or to have as much detail! 

If you have any questions or would like clarification, please email ivana@zoyya.com. 

### How to complete the exercise

As you complete parts of the exercise, please use git to commit your code as you would normally work on a project. This is helpful component to see how you work as well.

When you are complete, you can submit your work by zipping your `zoyya-code-exercise` directory and emailing it to posao@zoyya.com. **Please remove the `node_modules` directory before you zip, that won't be necessary 😉.** You can use Mac's "create archive" feature, Window's "compressed (zipped) folder," or the zip cli on Linux.

Try to complete the tasks to the best of your ability 😃 Good luck!

### Tasks

1. Create a "Locations List" component which shows all the locations from the data file, and their basic information (name, image, description) (similar to the picture below)
2. Implement an onClick event on the Location item and render the Location detail component (similar to the picture below)
3. The Location Detail component should show basic location information (name, address, image, description, team members)
4. Add your CSS and design. 
5. *If you would like, feel free to use a different design and layout than the one shown on the screenshots or organize the code in a way you think is best.*


## Screenshots

### Locations List

![screenshot of end locations list](https://uploads-ssl.webflow.com/5f104abb3aa5a96156dbb059/6027b3d9f2efac4516eac50b_locationsList.png)

### Location Detail

![screenshot of end locations list](https://uploads-ssl.webflow.com/5f104abb3aa5a96156dbb059/6027b3f1b18b474ea35a9b62_location.png)


