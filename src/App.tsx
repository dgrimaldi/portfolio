import React from 'react';
import Layout from "./components/Layout";
import slides from "./features/Slides";

function App() {
  return (
    <Layout items={slides} />
  );
}

export default App;
