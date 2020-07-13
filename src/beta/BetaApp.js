// @flow
import React, { Suspense } from "react";
import { Button } from 'antd-mobile';
import "alpha/styles/index.css";
import SomeComponent from 'alpha/components/SomeComponent';
console.log({SomeComponent})
// const SomeLazyComponent = React.lazy(() => import('alpha/components/SomeComponent'));


type AppProps = {
  title: String
}

export default function BetaApp({ title }: AppProps) {
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
        <SomeComponent />
      </Suspense>
    </>
  )
}