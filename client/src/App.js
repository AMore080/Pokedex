import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';

import './App.css';
import Header from './components/header';
import Main from './pages/Main';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Router>
          <Header />
          <Main />
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
