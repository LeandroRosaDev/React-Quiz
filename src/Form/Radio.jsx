import React from 'react';

const Radio = ({ pergunta, options, value, onChange, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{
            marginBottom: '1rem',
            marginLeft: '20px',
            fontFamily: 'monospace',
          }}
        >
          <input
            type="radio"
            checked={value === option}
            id={id}
            value={option}
            onChange={onChange}
            style={{
              width: '20px',
              marginBottom: '-20px',
              marginLeft: '-20px',
            }}
          />

          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
