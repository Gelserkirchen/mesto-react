import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isImagePopupOpen, setImagePopupState] = useState(false);
  const [isAvatarSaved, saveAvatar] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: '', name: '' });

  function handleEditProfileClick() { setEditProfileState(!isEditProfilePopupOpen) }
  function handleAddPlaceClick() { setAddPlacePopupState(!isAddPlacePopupOpen) }
  function handleEditAvatarClick() { setEditAvatarPopupState(!isEditAvatarPopupOpen) }
  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopupState(true)
  }

  function closeAllPopups() {
    setEditProfileState(false)
    setAddPlacePopupState(false)
    setEditAvatarPopupState(false)
    setImagePopupState(false)
  }

  return ( 
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm name={"profile"} title={"Редактировать профиль"} buttonText={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label htmlFor="name-input" className="popup__label">
          <input id="name-input" name="name" className="popup__input popup__input_type_name" type="text"
            placeholder="Имя" minLength="2" maxLength="40" required />
          <span id="error-of-input" className="popup__input-error name-input-error">Текст ошибки</span>
        </label>

        <label htmlFor="profession-input" className="popup__label">
          <input id="profession-input" name="profession" className="popup__input popup__input_type_profile"
            type="text" placeholder="Профессия" minLength="2" maxLength="200" required />
          <span className="popup__input-error profession-input-error ">Текст ошибки</span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={"new-card"} title={"Новое место"} buttonText={"Создать"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label htmlFor="place-input" className="popup__label">
          <input id="place-input" name="name" className="popup__input popup__input_type_place" type="text"
            placeholder="Название" minLength="2" maxLength="40" required />
          <span className="popup__input-error place-input-error">Текст ошибки</span>
        </label>

        <label htmlFor="link-input" className="popup__label">
          <input id="link-input" name="link" className="popup__input popup__input_type_link" type="url"
            placeholder="Ссылка на картинку" required minLength="2" />
          <span className="popup__input-error link-input-error">Текст ошибки</span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={"update-avatar"} title={"Обновить аватар"} buttonText={"Сохранить"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label htmlFor="link-input" className="popup__label">
          <input id="update-avatar-link" name="link" className="popup__input popup__input_type_link"
            type="url" placeholder="Ссылка на аватар" required minLength="2" />
          <span className="popup__input-error update-avatar-link-error">Текст ошибки</span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={"delete-card"} title={"Вы уверены?"} buttonText={"Да"} isOpen={isAvatarSaved} onClose={closeAllPopups}/>
  
      <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />

    </div>
  );
}

export default App;
