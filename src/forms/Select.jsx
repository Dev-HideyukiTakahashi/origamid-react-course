import React from 'react'

export const Select = () => {
    const [select, setSelect] = React.useState('');
  return (
    <form action="">

        <select 
        value={select} 
        onChange={({target}) => setSelect(target.value)}
        id='produtos'>
            <option value="" disabled>Selecione</option>
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
        </select>

        <p>Select: {select}</p>

    </form>
  )
}
