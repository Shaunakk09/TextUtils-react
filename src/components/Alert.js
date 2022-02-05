import React from 'react'

function Alert(props) {

  const capital =(word) =>{
        const Lower =word.toLowerCase();
        return Lower.charAt(0).toUpperCase() + Lower.slice(1);
    }
  return (

    /* if props.alert is not null , then only below lines will run. We use props.alert && for the same! */
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alert.type)}</strong>: {props.alert.message}
      </div>

  )
}

export default Alert
