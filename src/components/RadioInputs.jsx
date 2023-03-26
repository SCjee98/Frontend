import React from 'react'

const RadioInputs = ({radioInputs, radioLabel, onChange, values}) => {
  console.log(radioInputs)
  return (
    
    <div style={{ padding: '2rem 0 2rem 0'}}>
        <label>{radioLabel}</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
        {radioInputs.map((input) => (
        <div>
            <input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            />
            <label style={{ paddingLeft: '8px' }}>{input.label}</label>
        </div>
        ))}
        </div>
    </div>
  )
}

export default RadioInputs