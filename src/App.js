// @flow
import React, { Suspense } from "react";
import { Button } from 'antd-mobile';

import "./style/index.css";
const SomeLazyComponent = React.lazy(() => import('./SomeComponent'));


type AppProps = {
  title: String
}

export default function App({ title }: AppProps) {
  console.log(Parse.serverURL)
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
      <Suspense fallback="Loading...">
        <SomeLazyComponent />
      </Suspense>
    </>
  )
}