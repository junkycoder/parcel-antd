import * as React from "react";
import * as ReactDOM from "react-dom";

import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
Amplify.configure(require('./aws-exports')); // Cognito, ...


import('parse/dist/parse').then(Parse => {
  // Important: Make Parse globally accessible
  window.Parse = Parse;

  Parse.serverURL = 'https://kynky.back4app.io' // This is your Server URL
  Parse.initialize(
    't7pPhDG9sq1oFvCNkZk8B6KVt5ilajXfQcdN0MVr', // This is your Application ID
    'bELcI7njWIs7GnboihO8VPyne2cyH63raUhEqxj4' // This is your Javascript key
  );

  import('./App').then(module => render(module.default));
});



function render(App) {
  ReactDOM.render(
    <App title="Ant Design & Parcel." />,
    document.getElementById("root")
  );
}

