import React from 'react'

export const TextArea = () => {
    const [textarea, setTextarea] = React.useState('');
  return (
    <form action="">
        <textarea 
            value={textarea} 
            onChange={({target}) => setTextarea(target.value)}
            rows="5">            
        </textarea>
        <p>Textarea: {textarea}</p>
    </form>
  )
}
