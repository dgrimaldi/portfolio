import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from "./apollo/client";
import App from './App';
import {ConfigProvider, theme} from "antd";

document.body.style.margin = String(0);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <ConfigProvider
              theme={{
                  algorithm: theme.darkAlgorithm,
              }}
          >
              <App />
          </ConfigProvider>
      </ApolloProvider>
  </React.StrictMode>
);
