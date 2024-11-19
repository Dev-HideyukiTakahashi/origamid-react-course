import React from 'react'
import { TextArea } from './TextArea';
import { Select } from './Select';

export const AppForms = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

  return (
    <>
    <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome</label>
        <input 
        id='nome'
        type="text" 
        name='nome'
        value={nome} 
        onChange={event => setNome(event.target.value)} />

        <label htmlFor="email">Email</label>
        <input 
        id='email'
        type="email" 
        name='email'
        value={email} 
        onChange={event => setEmail(event.target.value)} />

        <button>Enviar</button>
    </form>
        <hr />
        <TextArea/>
        <hr />
        <Select/>
        <hr />
        </>
  )
}
