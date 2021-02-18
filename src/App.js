import React from "react";
import "./style.css";
import CompC from "./CompC";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";

export const UserContext = React.createContext();
export const DeviceContext = React.createContext();
export default function App() {
  return (
    <div className="app">
      <UserContext.Provider value={"vinit"}>
        <DeviceContext.Provider value={"laptop"}>
          <CompC />
          <CounterOne />
          <CounterTwo />
          <CounterThree />
        </DeviceContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
