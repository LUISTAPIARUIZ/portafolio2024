import React, { useState, useEffect } from 'react';
import './styles/PopUpContact.css';

const Popup = ({ show, onClose }) => {
    const [activeFields, setActiveFields] = useState({});
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (show) {
            setTimeout(() => setAnimate(true), 50);
        } else {
            setAnimate(false);
        }
    }, [show]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log('Formulario enviado');
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className={`popup-content ${animate ? 'animate' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="popup">
                    <div className="popup__title">
                        <h3>Contáctame</h3>
                    </div>
                    <form className="popup__form" onSubmit={handleSubmit}>
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
                                htmlFor="emailContact"
                                className={`labelInput ${isActive('emailContact') ? 'labelActive' : ''}`}
                            >
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                name="emailContact"
                                id="emailContact"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="popup__form-block">
                            <label
                                htmlFor="subjectContact"
                                className={`labelInput ${isActive('subjectContact') ? 'labelActive' : ''}`}
                            >
                                Asunto
                            </label>
                            <input
                                type="text"
                                name="subjectContact"
                                id="subjectContact"
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
                        <div className="popup__form-block btnEnviarContact">
                            <button className='btnSubmitFormContact' type='button' onClick={handleSubmit}>Enviar</button>
                        </div>
                    </form>
                </div>
                <button className='btnCerrarForm' onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

export default Popup;   