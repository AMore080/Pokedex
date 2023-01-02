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

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Router>
          <Header />
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
