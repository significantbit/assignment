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


# Problems

## Leap
Write a function that tests if a year is leap year or not.
