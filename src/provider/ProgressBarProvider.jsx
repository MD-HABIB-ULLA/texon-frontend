"use client";

import { AppProgressBar } from "next-nprogress-bar";


const ProgressBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="5px"
        color="#2980F1"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
export default ProgressBarProvider;
