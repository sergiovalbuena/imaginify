import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      Home
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
