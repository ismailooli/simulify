// App.js

import React from 'react';
import Header from './components/Header';
import PlaylistSelector from './components/PlaylistSelector';
import TransferButton from './components/TransferButton';
import OutputSection from './components/OutputSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PlaylistSelector />
        <TransferButton />
        <OutputSection />
      </main>
    </div>
  );
}

export default App;
