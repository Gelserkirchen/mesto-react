import PopupWithForm from './PopupWithForm'
import React from 'react';
import { createRef, useState } from 'react'

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar } ) {
    const [link, setLink] = useState('');
    const avatarRef = createRef('');

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();         

        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }


    return (
        <PopupWithForm name={"update-avatar"} title={"Обновить аватар"} buttonText={"Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label htmlFor="link-input" className="popup__label">
                <input id="update-avatar-link" onChange={ handleChangeLink } value={link} ref = { avatarRef } name="link" className="popup__input popup__input_type_link"
                    type="url" placeholder="Ссылка на аватар" required minLength="2" />
                <span className="popup__input-error update-avatar-link-error">Текст ошибки</span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup; 