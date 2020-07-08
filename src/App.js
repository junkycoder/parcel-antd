

// @flow
import React from "react";
import { Button } from "antd";

import "/style/index.css";

type AppProps = {
  title: String
}

export default function App({ title }: AppProps) {
  return (
    <>
      <p className={"foo"}>Hi! {title}</p>
      <Button type="primary" href={"https://ant.design/index-cn"}>
        Antd Docs
      </Button>
      &nbsp;
      <Button type="primary" href={"https://parceljs.org/"}>
        Parcel Docs
      </Button>
    </>
  );
};
