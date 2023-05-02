import React from 'react';
import Layout from "./components/Layout";
import AboutMe from "./features/AboutMe";
import Contact from "./features/Contact";

function App() {
  return (
    <Layout items={[AboutMe, Contact]} />
  );
}

export default App;
