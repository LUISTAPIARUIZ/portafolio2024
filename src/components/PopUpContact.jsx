import React, { useState, useEffect } from 'react';
import { db } from "../config/firebaseConfig"; // Importamos la configuración de Firebase
import { collection, addDoc } from "firebase/firestore"; // Importar funciones de Firestore
import emailjs from 'emailjs-com'; // Importamos EmailJS
import './styles/PopUpContact.css';

const Popup = ({ show, onClose }) => {
    const [activeFields, setActiveFields] = useState({});
    const [animate, setAnimate] = useState(false);
    const [formData, setFormData] = useState({
        nameContact: '',
        phoneContact: '',
        emailContact: '',
        subjectContact: '',
        messageContact: ''
    });

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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const isActive = (id) => activeFields[id] || document.getElementById(id)?.value;

    const sendEmail = (emailData) => {
        // Configura los parámetros para enviar el correo con EmailJS
        emailjs.send('service_wjehjl8', 'template_ww292p2', emailData, 'Z50imvduaa34ySn1p')
        .then((response) => {
            console.log('Correo enviado exitosamente', response.status, response.text);
            alert('Correo enviado exitosamente');
        }, (err) => {
            console.log('Error al enviar el correo', err);
            alert('Hubo un error al enviar el correo, por favor intenta de nuevo.');
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar los datos a Firestore
            await addDoc(collection(db, "contactMessages"), {
                Nombre: formData.nameContact,
                Celular: formData.phoneContact,
                Correo: formData.emailContact,
                Asunto: formData.subjectContact,
                Mensaje: formData.messageContact,
                timestamp: new Date()
            });

            // Enviar correo con EmailJS
            const emailData = {
                to_name: formData.nameContact,  // Nombre de quien envía el mensaje
                to_email: formData.emailContact,  // Correo del destinatario (la persona que llenó el formulario)
                subject: formData.subjectContact, // Asunto del mensaje
                message: formData.messageContact  // Mensaje enviado
            };

            sendEmail(emailData);

            // Limpiar el formulario después de enviar
            setFormData({
                nameContact: '',
                phoneContact: '',
                emailContact: '',
                subjectContact: '',
                messageContact: ''
            });

            alert('Mensaje enviado correctamente');

        } catch (error) {
            console.error('Error al enviar el mensaje: ', error);
            alert('Hubo un error al enviar el mensaje, por favor intenta de nuevo.');
        }
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
                                value={formData.nameContact}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
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
                                    value={formData.phoneContact}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
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
                                value={formData.emailContact}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
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
                                value={formData.subjectContact}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
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
                                value={formData.messageContact}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                            ></textarea>
                        </div>
                        <div className="popup__form-block btnEnviarContact">
                            <button className='btnSubmitFormContact' type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
                <button className='btnCerrarForm' onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

export default Popup;
