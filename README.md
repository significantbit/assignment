# Getting started
Get the tests in src/specs to pass

You need to add code to the empty Javascript files in src

Create small commits that shows how you got to the solution.

# Running test suite
The development environment is handled by Docker.

Docker is tool for maintaining application environment,
this means that you will not have to install any development tools
on your local machine except git, docker and a text editor.

You can download and install Docker from here: https://www.docker.com/products/docker

The tests uses Jasmine 2.5, if you don't understand any implementation
details you can read the docs here: https://jasmine.github.io/2.5/introduction
However the tests are quite self explanatory.

## Running tests
`docker-compose up` will build the container if it is missing and
then start the application/service.

`docker-compose build` will rebuild your container.
You will have to rebuild if you add packages to package.json
since application dependencies are handled by the container

`docker-compose run test [COMMAND]`
If you need to issue any commands in the container.
For example adding a npm package:
`docker-compose run test npm install express --save`

You should run docker commands in the root level of the project structure
and not in the src subdirectory.

## Focus on separate tests
If you would want to focus on a specific problem and not get all failing tests at once you can add the letter `f` before `describe` or `it` then only the tests marked will run.

Example:
`describe('Leap year', function() { .. `
becomes `fdescribe('Leap year', function() { .. `


# Problems

## Leap
Write a function that tests if a year is leap year or not.

Every fourth year is a leap year except if it is exactly divisible by 100 but if it is a the same time is exactly divisible by 400 it is still a leap year.

* 2016 is a leap year since it is divisible by 4
* 1700 is not a leap year since it is divisible by 100 but not 400
* 1600 is since it is divisible by 400


## Fizz-Buzz
Fizz Buzz is a play that teaches children about division.

You sit in a ring and counts 1, 2 .. but when you hit a number that is divisible by 3 you say Fizz if you hit a number divisible by 5 you say Buzz. If the number is both divisible by 3 and 5 you should answer FizzBuzz

1,2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, ... 13, 14, FizzBuzz

Your task is to implement a function that creates an array over all integers from 1 to 100 and create the correct response for each number.

## Recursive reverse
Write a function that reverse a string using a recursive function.

A recursive function calls itself instead of using imperative loop constructs
such as: forEach, for, while, do, break, continue, label, map, for .. in,
for .. of 
