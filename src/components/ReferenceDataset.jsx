import React, { useState } from 'react';
import './ReferenceDataset.css'; // You'll need to create this CSS file

const ReferenceDataset = ({ selectedDataset, onDatasetChange }) => {
//   const [suggestAutomatically, setSuggestAutomatically] = useState(true);

//   const handleToggle = () => {
//     setSuggestAutomatically(!suggestAutomatically);
//   };

//   const handleSuggest = () => {
//     // Implement suggestion logic here
//     console.log('Suggesting dataset...');
//   };

  const handleReset = () => {
    onDatasetChange(null);
  };

  const handleRun = () => {
    // Implement run logic here
    console.log('Running with dataset:', selectedDataset);
  };

  return (
    <div className="reference-dataset">
      <h2>Selected reference dataset</h2>
      <div className="toggle-container">
        <label className="toggle">
          <input
            type="checkbox"
            checked={suggestAutomatically}
            onChange={handleToggle}
          />
          <span className="slider round"></span>
        </label>
        <span>Suggest automatically</span>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
      {/* {!suggestAutomatically && (
        <button onClick={handleSuggest} className="suggest-button">Suggest</button>
      )} */}
      {selectedDataset ? (
        <div className="dataset-info">
          <div className="dataset-icon">{selectedDataset.icon}</div>
          <div className="dataset-details">
            <h3>{selectedDataset.name}</h3>
            <p>{selectedDataset.description}</p>
            <p>Reference: {selectedDataset.reference}</p>
            <p>Updated at: {selectedDataset.updatedAt}</p>
            <p>Dataset name: {selectedDataset.datasetName}</p>
          </div>
          <button className="close-button" onClick={handleReset}>&times;</button>
        </div>
      ) : (
        <p>No dataset selected</p>
      )}
      <div className="bottom-buttons">
        <button onClick={() => {/* Implement change dataset logic */}}>
          Change reference dataset
        </button>
        <button onClick={handleRun} className="run-button" disabled={!selectedDataset}>
          Run
        </button>
      </div>
    </div>
  );
};

export default ReferenceDataset;