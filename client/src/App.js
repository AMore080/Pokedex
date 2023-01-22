import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, NextUIProvider } from '@nextui-org/react';
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

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      pokeRedBtn: '#ef233c'
    }
  }
})




const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider theme={theme}>
        <Router>
          <Header />
          <Main />
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
