import React from 'react';

function TableComponent(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {props.thead.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tbody.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                {(!cell.toString().endsWith('.pdf') && cell.toString().startsWith('https')) ? (
        <img src={cell} alt="Image" style={{ width: '100px', height: 'auto' }} />
      ) : cell.toString().startsWith('https') ? (
        <a href={cell}  className='btn btn-danger' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
          View PDF
        </a>
      ) : (
        <span>{cell}</span>
      )}
              </td> ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
