import React from 'react'
import Select from 'react-select'

function formatSelectValue(data) {
  if (!Array.isArray(data)) {
    return data && data.value
  }
  return data.map(opt => opt.value)
}

export default function CustomInput({
  input, placeholder, type, options, multi,
  min, max,  meta: {touched: {touched, error}}
}) {
  const field = (type==='select') ?
    <Select
      {...input}
      placeholder={placeholder}
      options={options}
      multi={multi}
      onChange={(option) => { input.onChange(formatSelectValue(option))} }
      onBlur={(option) => input.onChange(formatSelectValue(option))} />
    :
    <input {...input} className='form-control' placeholder={placeholder}/>

  return (
    <div className='form-group col-md-12'>
      {field}
      {touched && error && <span>{error}</span>}
    </div>
  )
}
