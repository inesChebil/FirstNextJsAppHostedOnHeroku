import React from "react";
import User from "../../components/User";
const authIndexPage = (props) => {
  return (
    <div>
      <h1>Welcome to {props.appName}</h1>
      <User name="ines" age="28" />
      <style jsx>{`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        appName: "superAuthApp",
      });
    }, 5000);
  });
  return promise;
};
export default authIndexPage;
