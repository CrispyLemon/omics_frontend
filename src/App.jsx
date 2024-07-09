import React, { useState } from 'react';
import ReferenceDataset from './components/ReferenceDataset';
function Header() {
  // Implement header with logo and navigation
}

function SequenceDataInput() {
  // Implement file upload area with drag-and-drop
}

// function ReferenceDataset({ selectedDataset, onDatasetChange }) {
//   // Implement dataset selection and display
// }

function Footer() {
  // Implement footer
}

function App() {
  const [suggestAuto, setSuggestAuto] = useState(true);
  const [selectedDataset, setSelectedDataset] = useState(null);

  return (
    <div className="app">
      <Header />
      <main>
        <SequenceDataInput />
        <ReferenceDataset 
          selectedDataset={selectedDataset}
          onDatasetChange={setSelectedDataset}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;