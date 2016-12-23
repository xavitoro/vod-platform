import React from 'react'
import Select from 'react-select'

function formatSelectValue(data) {
  if (!Array.isArray(data)) {
    return data && data.value
  }
  return data.map(opt => opt.value)
}

export default function CustomInput({
  input,
  placeholder,
  type,
  options,
  multi,
  meta: {touched, error}
}) {
  const field = (type==='select') ?
    <Select
      {...input}
      placeholder={placeholder}
      options={options}
      multi={multi}
      style={{minWidth: 200}}
      onChange={(option) => { input.onChange(formatSelectValue(option))} }
      onBlur={(option) => input.onChange(formatSelectValue(option))} />
    :
    <input {...input} className='form-control' placeholder={placeholder}/>

  return (
    <div className='form-group col-md-12'>
      {field}
      {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </div>
  )
}
