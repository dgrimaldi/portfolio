import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import Expertise from "./features/Expertise";
import Experience from "./features/Experience";
import CircularPacking from "./features/CircularPacking/CircularPacking";
import {message} from "antd";
const messageText: string = "Hi from Davide! Try to drag circles in the canvas"

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    messageApi.info({content: messageText, key: "message"});
    return () => { messageApi.destroy("message") }
  })

  return (
      <>
        {contextHolder}
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
