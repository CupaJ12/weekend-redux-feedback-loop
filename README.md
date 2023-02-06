# Project Name
redux-feedback form

## Description

This project took about a week to develop. i created multiple components, linked them together, took user inputs from each and made the data globally available using reducers. combined the data from the reducers into an object which i then sent to the database. the user inputs are validated, users cannot proceed to the next page unless data has been submitted.


## Installation

NPM install, then npm run server on one terminal window, in another terminal npm run client

create a database called prime_feedback
create a table called feedback
use the sql file contained within this project for the above


## usage

when the user enters the website, they will arrive at a feedback page. they are prompted for feedback, the input must contain a value for them to proceed. they are then taken to the next step in the feedback process. this continues until they finish inputting all the necessary data, at which point the inputted data is neatly provided to them for review, and they can choose to submit their data. they are then taken to a page confirming they submitted their data, and they can start the whole process over again by clicking a button. 

<!-- todo: -->
<!-- -use the router X
-create a reducer for each page that stores the user input X
-render the result/state those reducers on the same page(review page)
-we take in all inputs and combine them into an object which is then passed to the database by the router, when submit is pressed on the review feedback page this is sent to db

new todo:
-make the router actually work
-bundle user inputs
-data validation
-send the bundled inputs into db -->




Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
