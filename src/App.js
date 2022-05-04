import headerLogo from '../src/images/header-logo.svg'; 

function App() {
  return (
        <div className="page">
          <header className="header">
            <img className="header__logo" src={headerLogo} alt="Логотип проекта Место"/>
          </header>

          <main className="content">
            <section className="profile">
              <a href="#" className="profile__avatar" alt="Аватар"></a>
              <div className="profile__info">
                <div className="profile__name-section">
                  <h1 className="profile__name">Жак Ив Кусто</h1>
                  <button className="profile__edit-button" type="button"></button>
                </div>
                <p className="profile__profession">Исследователь океана</p>
              </div>
              <button className="profile__add-button" type="button"></button>
            </section>

            <section className="cards"></section>
          </main>

          <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
          </footer>

          <template className="card__template">
            <div className="card">
              <button className="card__delete-button" type="button"></button>
              <img src="#" className="card__image" alt="Картинка места"/>
                <div className="card__description">
                  <h2 className="card__text"></h2>
                  <div className="card__like-section">
                    <button className="card__like-button" type="button"></button>
                    <span className="card__like-number"></span>
                  </div>
                </div>
            </div>
          </template>

          <section className="popup popup_type_profile">
            <div className="popup__container ">
              <button className="popup__close-button" type="button"></button>
              <h3 className="popup__title">Редактировать профиль</h3>
              <form className="popup__inputs" novalidate>
                <label for="name-input" className="popup__label">
                  <input id="name-input" name="name" className="popup__input popup__input_type_name" type="text"
                    placeholder="Имя" minlength="2" maxlength="40" required/>
                    <span id="error-of-input" className="popup__input-error name-input-error">Текст ошибки</span>
                </label>

                <label for="profession-input" className="popup__label">
                  <input id="profession-input" name="profession" className="popup__input popup__input_type_profile"
                    type="text" placeholder="Профессия" minlength="2" maxlength="200" required/>
                    <span className="popup__input-error profession-input-error ">Текст ошибки</span>
                </label>

                <button className="popup__save-button" type="submit">Сохранить</button>
              </form>
            </div>
          </section>


          <section className="popup popup_type_new-card">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <h3 className="popup__title">Новое место</h3>
              <form className="popup__inputs" id="popup__place-form" novalidate>
                <label for="place-input" className="popup__label">
                  <input id="place-input" name="name" className="popup__input popup__input_type_place" type="text"
                    placeholder="Название" minlength="2" maxlength="40" required/>
                    <span className="popup__input-error place-input-error">Текст ошибки</span>
                </label>

                <label for="link-input" className="popup__label">
                  <input id="link-input" name="link" className="popup__input popup__input_type_link" type="url"
                    placeholder="Ссылка на картинку" required minlength="2"/>
                    <span className="popup__input-error link-input-error">Текст ошибки</span>
                </label>
                <button className="popup__save-button popup__save-button_inactive" type="submit">Создать</button>
              </form>
            </div>
          </section>

          <section className="popup popup_type_delete-card">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <h3 className="popup__title popup__title_type_delete-card">Вы уверены?</h3>
              <form className="popup__inputs" novalidate>
                <button className="popup__save-button" type="submit">Да</button>
              </form>
            </div>
          </section>


          <section className="popup popup_type_update-avatar">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <h3 className="popup__title">Обновить аватар</h3>
              <form className="popup__inputs" novalidate>
                <label for="link-input" className="popup__label">
                  <input id="update-avatar-link" name="link" className="popup__input popup__input_type_link"
                    type="url" placeholder="Ссылка на аватар" required minlength="2"/>
                    <span className="popup__input-error update-avatar-link-error">Текст ошибки</span>
                </label>
                <button className="popup__save-button" type="submit">Сохранить</button>
              </form>
            </div>
          </section>


          <section className="popup image-popup">
            <div className="image-popup__container">
              <button className="popup__close-button" type="button"></button>
              <img className="image-popup__picture" src="#" alt="#"/>
                <p className="image-popup__description"></p>
            </div>
          </section>

        </div>
  );
}

export default App;
