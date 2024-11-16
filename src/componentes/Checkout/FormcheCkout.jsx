import "./formcheck.css";

import React from 'react';

const FormcheCkout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
    
        <form onSubmit={handleSubmitForm} className="checkoutForm">
            <div className="formGroup">
                <label className="formLabel">Nombre completo</label>
                <input type="text"  name="fullname"  value={dataForm.fullname} onChange={handleChangeInput} className="formInput" />
            </div>

            <div className="formGroup">
                <label className="formLabel">Teléfono</label>
                <input 
                    type="number" 
                    name="phone" 
                    value={dataForm.phone} 
                    onChange={handleChangeInput} 
                    className="formInput" 
                />
            </div>

            <div className="formGroup">
                <label className="formLabel">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={dataForm.email} 
                    onChange={handleChangeInput} 
                    className="formInput" 
                />
            </div>

            <button type="submit" className="formSubmitButton">Enviar mi orden</button>
        </form>

    
    );
}

export default FormcheCkout;
