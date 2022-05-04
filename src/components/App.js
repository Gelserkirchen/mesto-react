import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);

  function handleEditProfileClick() { setEditProfileState(!isEditProfilePopupOpen) }
  function handleAddPlaceClick() { setAddPlacePopupState(!isAddPlacePopupOpen) }
  function handleEditAvatarClick() { setEditAvatarPopupState(!isEditAvatarPopupOpen) }
  function closeAllPopups() { console.log('i am here') }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />

      <PopupWithForm name={"profile"} title={"Редактировать профиль"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label for="name-input" className="popup__label">
          <input id="name-input" name="name" className="popup__input popup__input_type_name" type="text"
            placeholder="Имя" minlength="2" maxlength="40" required />
          <span id="error-of-input" className="popup__input-error name-input-error">Текст ошибки</span>
        </label>

        <label for="profession-input" className="popup__label">
          <input id="profession-input" name="profession" className="popup__input popup__input_type_profile"
            type="text" placeholder="Профессия" minlength="2" maxlength="200" required />
          <span className="popup__input-error profession-input-error ">Текст ошибки</span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={"new-card"} title={"Новое место"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label for="place-input" className="popup__label">
          <input id="place-input" name="name" className="popup__input popup__input_type_place" type="text"
            placeholder="Название" minlength="2" maxlength="40" required />
          <span className="popup__input-error place-input-error">Текст ошибки</span>
        </label>

        <label for="link-input" className="popup__label">
          <input id="link-input" name="link" className="popup__input popup__input_type_link" type="url"
            placeholder="Ссылка на картинку" required minlength="2" />
          <span className="popup__input-error link-input-error">Текст ошибки</span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={"update-avatar"} title={"Обновить аватар"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label for="link-input" className="popup__label">
          <input id="update-avatar-link" name="link" className="popup__input popup__input_type_link"
            type="url" placeholder="Ссылка на аватар" required minlength="2" />
          <span className="popup__input-error update-avatar-link-error">Текст ошибки</span>
        </label>
      </PopupWithForm>


      {/* <template className="card__template">
        <div className="card">
          <button className="card__delete-button" type="button"></button>
          <img src="#" className="card__image" alt="Картинка места" />
          <div className="card__description">
            <h2 className="card__text"></h2>
            <div className="card__like-section">
              <button className="card__like-button" type="button"></button>
              <span className="card__like-number"></span>
            </div>
          </div>
        </div>
      </template> */}

      <section className="popup popup_type_delete-card">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title popup__title_type_delete-card">Вы уверены?</h3>
          <form className="popup__inputs" novalidate>
            <button className="popup__save-button" type="submit">Да</button>
          </form>
        </div>
      </section>




      <ImagePopup />


    </div>
  );
}

export default App;
