import React from 'react'

export const Radio = () => {
    const [radio, setRadio] = React.useState('');

    function handleChange({target}) {
        setRadio(target.value)
    }

  return (
    <form action="">
        <label><input onChange={handleChange} type="radio" value="smartphone" name='produto'/> Smartphone</label>
        <label><input onChange={handleChange} type="radio" value="notebook" name='produto'/> Notebook</label>

    <p>Radio: {radio}</p>

    </form>
  )
}
