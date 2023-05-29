import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client';
import {client} from "./utils/graphql.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>,
)
