import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

// function Users() {
//   return USERS.map((user) => {
//     return <Card key={user.id} user={user} />;
//   });
// }

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      {/* <div className="app__card-grid">
        <Users />
      </div> */}
    </main>
  );
}
