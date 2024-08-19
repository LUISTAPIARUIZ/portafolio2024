import React, { useState } from 'react';
import './styles/PopUpContact.css';

const Popup = ({ show, onClose }) => {
    const [activeFields, setActiveFields] = useState({});

    if (!show) {
        return null;
    }

    const handleFocus = (e) => {
        setActiveFields((prev) => ({ ...prev, [e.target.id]: true }));
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        if (!value) {
            setActiveFields((prev) => ({ ...prev, [id]: false }));
        }
    };

    const isActive = (id) => activeFields[id] || document.getElementById(id)?.value;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup">
                    <div className="popup__title">
                        <h3>Contáctame</h3>
                    </div>
                    <form className="popup__form">
                        <div className="popup__form-block">
                            <label
                                htmlFor="nameContact"
                                className={`labelInput ${isActive('nameContact') ? 'labelActive' : ''}`}
                            >
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                id="nameContact"
                                name="nameContact"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="popup__form-block block-dual">
                            <div>
                                <label
                                    htmlFor="mailContact"
                                    className={`labelInput ${isActive('mailContact') ? 'labelActive' : ''}`}
                                >
                                    Correo
                                </label>
                                <input
                                    type="mail"
                                    name="mailContact"
                                    id="mailContact"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phoneContact"
                                    className={`labelInput ${isActive('phoneContact') ? 'labelActive' : ''}`}
                                >
                                    Celular
                                </label>
                                <input
                                    type="text"
                                    name="phoneContact"
                                    id="phoneContact"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="popup__form-block">
                            <label
                                htmlFor="affairContact"
                                className={`labelInput ${isActive('affairContact') ? 'labelActive' : ''}`}
                            >
                                Asunto
                            </label>
                            <input
                                type="text"
                                name="affairContact"
                                id="affairContact"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="popup__form-block">
                            <label
                                htmlFor="messageContact"
                                className={`labelTextarea ${isActive('messageContact') ? 'labelActive' : ''}`}
                            >
                                Mensaje
                            </label>
                            <textarea
                                name="messageContact"
                                id="messageContact"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            ></textarea>
                        </div>
                        <button className='btnSubmitFormContact' type='submit'>Enviar</button>
                    </form>
                </div>
                <button className='btnCerrarForm' onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default Popup;