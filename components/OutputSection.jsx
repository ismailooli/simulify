
import React from 'react';

function OutputSection() {
  const transferredSongs = [
    'Song 1',
    'Song 2',
    'Song 3',
    // Add more transferred songs here
  ];

  return (
    <div className="output-section">
      <h2>Transferred Songs:</h2>
      <ul>
        {transferredSongs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>

      <div className="message">
        <h3>Transfer Status:</h3>
        <p>Transfer successful!</p>
      </div>

      {/* Add additional UI elements as needed */}
    </div>
  );
}

export default OutputSection;
