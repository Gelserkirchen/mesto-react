import Header from './Header'
import Main from './Main'
import ImagePopup from './ImagePopup'
import { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { api } from '../utils/api.js'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

function App() {
  const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isImagePopupOpen, setImagePopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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

  function handleUpdateUser({ name, about }) {
    api.editProfile(name, about).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  function handleUpdateAvatar({ avatar }) {
    api.updAvatar(avatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((data) => {
      setCards((cards) => cards.filter((c) => { return c._id !== card._id }))
    }
    );
  }

  function handleNewCardSubmit({ name, link }) {
    api.addCard(name, link).then((res) => {
      setCards([res, ...cards])
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


  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch((err) => {
        console.log('Ошибка загрузки данных карточек', err)
      })

  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleNewCardSubmit} />
        <PopupWithForm name={"delete-card"} title={"Вы уверены?"} buttonText={"Да"} onClose={closeAllPopups} />
        <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
