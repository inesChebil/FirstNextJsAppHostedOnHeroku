import React from "react";
import Link from "next/link";
import Router from "next/router";

const errorPage = () => {
  return (
    <div>
      <h1>Ooops something went wrong</h1>
      <p>
        Go <Link href="/">Back</Link>
      </p>
    </div>
  );
};

export default errorPage;
