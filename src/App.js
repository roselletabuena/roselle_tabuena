import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faFile, faTasks, faEnvelopeOpen, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faAddressCard, faFile, faTasks, faEnvelopeOpen, faCoffee)

function App() {
  return (
    <Layout />
  );
}

export default App;
