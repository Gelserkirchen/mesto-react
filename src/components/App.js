import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { api } from '../utils/api.js'
import EditProfilePopup from './EditProfilePopup'

function App() {
  const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isImagePopupOpen, setImagePopupState] = useState(false);
  const [isAvatarSaved, saveAvatar] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = useState({});

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

  function handleUpdateUser({name, about}) {
    api.editProfile(name, about).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  useEffect(() => {
    api.getProfile()
      .then(res => {
          setCurrentUser(res)
      })
      .catch((err) => {
        console.log('Ошибка загрузки данных профиля', err)
      })

  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={ handleUpdateUser }/>

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

            <PopupWithForm name={"delete-card"} title={"Вы уверены?"} buttonText={"Да"} isOpen={isAvatarSaved} onClose={closeAllPopups} />

        <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
