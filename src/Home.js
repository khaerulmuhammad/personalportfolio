import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1615551913949-b56393455baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Lorem title"
          description="Lorem ipsum kok ini mah bukan apa apa "
        />

        <Card
          src="https://images.unsplash.com/photo-1615551913949-b56393455baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Lorem title"
          description="Cuma Lorem ipsum kok ini mah bukan apa apa "
        />

        <Card
          src="https://images.unsplash.com/photo-1615551913949-b56393455baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Lorem title"
          description="Lorem ipsum kok ini mah bukan apa apa "
        />

        <Card
          src="https://images.unsplash.com/photo-1615551913949-b56393455baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Lorem title"
          description="Lorem ipsum kok ini mah bukan apa apa "
        />
      </div>
    </div>
  );
}

export default Home;
