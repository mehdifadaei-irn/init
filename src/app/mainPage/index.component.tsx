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
      {data?.at(0)?.title}
      {data?.at(0)?.title}
      <h4>myineenenenenenene</h4>
      <h3>myCodeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h3>
    </div>
  );
};

export default MainPage;
