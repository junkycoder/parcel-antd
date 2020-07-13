import * as React from "react";
import * as ReactDOM from "react-dom";

import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';

require('babel-polyfill'); // enable async/await (qwasfa)

export async function bootstrap() {

  Amplify.configure(require('./aws-exports')); // Cognito, ...
  const Parse = await import('parse/dist/parse');

  Parse.serverURL = 'https://kynky.back4app.io' // This is your Server URL
  Parse.initialize(
    't7pPhDG9sq1oFvCNkZk8B6KVt5ilajXfQcdN0MVr', // This is your Application ID
    'bELcI7njWIs7GnboihO8VPyne2cyH63raUhEqxj4' // This is your Javascript key
  );

  window.Parse = Parse; // IMPORTANT, to save some bytes, we're using Parse as global (reed as "native") object
}


/**
 * Render whatever app you want
 */
export function render(Application) {
  const root = document.getElementById("root");

  ReactDOM.render(<Application
    title="¯\_(ツ)_/¯"
    // app props TBD
  />, root);
}
