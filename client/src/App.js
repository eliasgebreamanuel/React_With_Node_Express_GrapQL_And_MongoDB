import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import {ApolloProvider} from 'react-apollo';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
class App extends Component{
  render(){
  return (
    <ApolloProvider client={client}>

      <div id="main">
          <h1>London is Blue.</h1>
          <BookList />
          <AddBook />
      </div>
    </ApolloProvider>

  );
}
}
export default App;
