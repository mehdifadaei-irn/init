"use client";
import React from "react";
import { useApiProductsCall } from "./index.hook";

const MainPage = () => {
  const { data, isPending } = useApiProductsCall();

  console.log(data);
  return (
    <div>
      <p>hello</p>
      {isPending && <p>helloWorl</p>}
      {data?.at(0)?.description}
    </div>
  );
};

export default MainPage;
