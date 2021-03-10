import React from 'react';
import styles from '../assets/styles/components/Documentation.module.css'


const Documentation = () => {
  return (
    <div className="documentation shadow-2xl w-3/5 text-white">
      <h1>Getting Started</h1>
      <h2>This page is an overview of the Doki Template and related resources</h2><br />
      <p>When a developer starts an application they want it to look good, but it takes
      some time to do this. we created doki template, we want to save time for developers
        avoiding concentrating on styles so that it focuses only on functionality, that is the goal of doki.</p><br />
      <h1>Snowpack</h1>
      <p>Snowpack is a lightning-fast frontend build tool, designed for the modern web.
      It is an alternative to heavier, more complex bundlers like webpack or Parcel in your development
      workflow. Snowpack leverages JavaScript's native module system (known as ESM) to avoid unnecessary
      work and stay fast no matter how big your project grows.Our application is done with React with
      help of Snowpack. Unlike traditional React application tooling, Snowpack saves you from getting
        bogged down with complex bundler setups and configuration files.</p><br />
      <h1>Firebase</h1>
      <p>We decided to go with Firebase for our backend/database as it provides all the functionality we
        need to develop this project such as authentication, database storage, and cloud storage.</p><br />
      <h1>Lerna</h1>
      <p>We installed Lerna to splitting up large codebases into separate independently versioned
        packages is extremely useful in our project. That way we avoid each other create many repositories.</p><br />
      <h1>npm</h1>
      <p>We are using npm as organization download the templates and that way the users could get only the template necessary. That is possible thankful to Lerna and Git.</p><br />
    </div >
  );
};

export default Documentation;
