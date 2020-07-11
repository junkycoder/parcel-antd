import * as React from "react";
import * as ReactDOM from "react-dom";

import('./App').then(module => render(module.default));



function render(App) {
  ReactDOM.render(
    <App title="Ant Design & Parcel." />,
    document.getElementById("root")
  );
}

