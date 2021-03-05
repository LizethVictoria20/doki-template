import React from 'react';

const Tutorial = () => {
  return (
    <div className="documentation shadow-2xl w-3/5 text-white">
      <h1>Run a template</h1>
      <p>Installing the templates that you want to view is pretty simple!
      We created a command that you could found in the information of each template.
      Run that command on your terminal and that will look like <span className="rounded-md bg-gray-300 text-black p-0.5">npx create-snowpack-app page-example --template @snowpack/$name-template </span>
      Once this is all done you're ready to run your template. simply execute <span className="rounded-md bg-gray-300 text-black p-0.5">yarn start</span> and give it a few
      seconds to get started. Once it's up, you can open your web browser and enter localhost:8080.
      This will allow you to try out your template! When you are finished simply go back to your terminal
      and hit ctrl + c to quit the program.</p><br />
    </div>
  );
}

export default Tutorial;
