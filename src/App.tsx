import React, {useEffect, useRef} from 'react';
import Layout from "./components/Layout/Layout";
import Expertise from "./features/Expertise";
import Experience from "./features/Experience";
import CircularPacking from "./features/CircularPacking/CircularPacking";

import Markdown from "./components/MarkdownComp";
import AboutMe from "./features/AboutMe";

function App() {
   return (
          <Layout components={[
              {
                  title: '',
                  content: <CircularPacking />
              },{
                  title: 'Davide Grimaldi',
                  subtitle: `Software Engineer, Front end & App Developer.`,
                  content: <AboutMe />
              },{
              title: 'My Expertise',
                  content: <Expertise />
            },{
              title:'Professional Experience',
                  content: <Experience />
          }]}/>
  );
}

export default App;
