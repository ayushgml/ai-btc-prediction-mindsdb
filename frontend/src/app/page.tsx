"use client";

import { useState } from 'react';

interface PredictionResponse {
  column_names: string[];
  context: { db: string };
  data: (string | number)[][];
  type: string;
}

export default function Home() {
  const [predictionData, setPredictionData] = useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      
      setLoading(true);
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        console.log("sending a request");
        const data: PredictionResponse = await response.json();
        console.log("data", data);
        setPredictionData(data);
      } else {
        console.error('Failed to fetch prediction data');
      }
    } catch (error) {
      console.error('Error fetching prediction data:', error);
    }
  };

  const renderTable = () => {
    if (!predictionData || predictionData.type !== 'table') {
      return null;
    }

    const columnNames = predictionData.column_names;
    const tableData = predictionData.data;

    return (
      <table className="border-collapse w-full">
        <thead>
          <tr>
            {columnNames.map((columnName) => (
              <th key={columnName} className="border border-gray-300 p-2">
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              {rowData.map((value, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Bitcoin Prediction App</h1>
      <p className="text-2xl mb-4">This is a simple app that will predict the price of bitcoin</p>
        
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Predict
      </button>

      {!predictionData && loading ? (
        <div className="mt-4">Loading...</div>
      ) : (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
            {renderTable()}
          </div>
          
      )}
      
    </main>
  );
}
