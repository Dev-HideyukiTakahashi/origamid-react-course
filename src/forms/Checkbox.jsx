import React from 'react'

export const Checkbox = () => {
    const [termos, setTermos] = React.useState(false);
    const [cores, setCores] = React.useState(['vermelho']);

    function valueCheckbox() {
      return  termos ? "true" : "false";
    }

    function handleChange({target}) {
        if(target.checked){
            setCores([...cores, target.value]);
        }else{
            setCores(cores.filter((cor) => cor != target.value))
        }
    }

  return (
    <form action="">
        <label>
            <input type="checkbox" value="Termos" 
            checked={termos} onChange={({target}) => setTermos(target.checked)}/>
            Aceito os termos.
        </label>
        <p>Checkbox: {valueCheckbox()}</p>
        <br />
        {/* múltiplis checkbox */}
        <label>
            <input type="checkbox" value="azul" 
             onChange={handleChange}/>
            Azul
        </label>
        <label>
            <input type="checkbox" value="vermelho" checked={cores.includes('vermelho')}
            onChange={handleChange}/>
            Vermelho
        </label>
        <p>Cores: [{cores}]</p>
    </form>
  )
}
