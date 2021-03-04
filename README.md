# Doki Template

## Introduction
### The project
when a developer starts an application they want it to look good, but it takes some time to do this. we created doki template, we want to save time for developers avoiding concentrating on styles so that it focuses only on functionality, that is the goal of doki

Other features: people who wish to upload their template can do so by simply registering on our page.

## The Team

- Lizeth Victoria Franco ([@LizVictoriaF](https://twitter.com/LizVictoriaF "@LizVictoriaF")) - Frontend Developer
- José Giraldo Ortega ([@JosGiraldoOrte1](https://twitter.com/JosGiraldoOrte1 "@JosGiraldoOrte1")) - Backend Developer
- Daniel Villaba ([@d4ni31_](https://twitter.com/d4ni31_ "@d4ni31_")) - Backend Developer
- Abdel Mejia ([@SoyBhalut](https://twitter.com/SoyBhalut "SoyBhalut")) - Frontend Developer

## Blog posts
PENDIENTE

## Context 
This project is our Portfolio Project, concluding our Foundations months at Holberton School. We could decide the final project and this was our idea.

## Tutorial
Here is a preview of our main feature
AGREGAR IMAGENES

## Run a template
Installing the templates that you want to view is pretty simple!

We created a command that you could found in the information of each template. Run that command on your terminal and that will look like
`npx create-snowpack-app page-example --template @snowpack/$name-template`

Once this is all done you're ready to run your template.
simply execute `yarn start` and give it a few seconds to get started. Once it's up, you can open your web browser and enter localhost:8080. This will allow you to try out your template!
When you are finished simply go back to your terminal and hit ctrl + c to quit the program.

## Architecture
[![](https://github.com/LizethVictoria20/doki-template/blob/dev-liz/www/public/infrastructure.png?raw=true)](http:/https://github.com/LizethVictoria20/doki-template/blob/dev-liz/www/public/Architecture.png?raw=true/)
## Snowpack
[Snowpack](https://www.snowpack.dev "Snowpack") is a lightning-fast frontend build tool, designed for the modern web. It is an alternative to heavier, more complex bundlers like webpack or Parcel in your development workflow. Snowpack leverages JavaScript's native module system (known as ESM) to avoid unnecessary work and stay fast no matter how big your project grows.

Our application is done with React with help of Snowpack. Unlike traditional React application tooling, Snowpack saves you from getting bogged down with complex bundler setups and configuration files.

## Firebase
We decided to go with Firebase for our backend/database as it provides all the functionality we need to develop this project such as authentication, database storage, and cloud storage.

## Lerna
We installed  Lerna to splitting up large codebases into separate independently versioned packages is extremely useful in our project. That way we avoid each other create many repositories.

## npm
We are using npm as organization download the templates and that way the users could get only the template necessary. That is possible thankful to Lerna and Git.

## License
MIT License
