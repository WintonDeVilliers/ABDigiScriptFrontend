// components/MyTable.js

import { useState } from "react";

const MyTable = ({ initialData }) => {
  // Ensure that initialData is an array
  const dataArray = Array.isArray(initialData) ? initialData : initialData.data;

  // Initialize tableData as a state with the array
  const [tableData, setTableData] = useState(dataArray);

  const addRow = () => {
    // Add a new row to the tableData
    const newRow = {
      topic: `Row ${tableData.length + 1}`,
      changeDescription: `Description ${tableData.length + 1}`,
    };

    setTableData((prevData) => [...prevData, newRow]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Change Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.topic}</td>
              <td>{row.changeDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default MyTable;
