import * as React from "react";
import * as ReactDOM from "react-dom";

import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';

import('./App').then(module => render(module.default));


Amplify.configure(require('./aws-exports')); // Cognito, ...


function render(App) {
  ReactDOM.render(
    <App title="Ant Design & Parcel." />,
    document.getElementById("root")
  );
}

