import React, {useEffect} from 'react';
import Layout from "./components/Layout/Layout";
import Expertise from "./features/Expertise";
import Experience from "./features/Experience";
import CircularPacking from "./features/CircularPacking/CircularPacking";
import {message} from "antd";

function App() {


  return (
      <>
        <Layout components={[
            {
              title: '',
              content: <CircularPacking />
            },{
              title: 'Davide Grimaldi',
              subtitle: 'Software Engineer, Front end & App Developer.'
            },{
              title: 'My Expertise',
              content: <Expertise />
            },{
              title:'Professional Experience',
              content: <Experience />
            }
        ]}/>
      </>
  );
}

export default App;
