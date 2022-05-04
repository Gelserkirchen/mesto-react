function PopupWithForm({ name, title, isOpen, children, onClose }) {
    return (
        <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container ">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form className="popup__inputs" name={name} novalidate>
                    {children}
                    <button className="popup__save-button" type="submit">{ name === "new-card" ? "Создать" : "Сохранить"}</button>                    
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;

{/* <section className="popup popup_type_profile">
<div className="popup__container ">
    <button className="popup__close-button" type="button"></button>
    <h3 className="popup__title">Редактировать профиль</h3>
    <form className="popup__inputs" novalidate>
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

        <button className="popup__save-button" type="submit">Сохранить</button>
    </form>
</div>
</section> */}


{/* <section className="popup popup_type_new-card">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__inputs" id="popup__place-form" novalidate>
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
            <button className="popup__save-button popup__save-button_inactive" type="submit">Создать</button>
          </form>
        </div>
      </section> */}


{/* <section className="popup popup_type_update-avatar">
    <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <h3 className="popup__title">Обновить аватар</h3>
        <form className="popup__inputs" novalidate>
            <label for="link-input" className="popup__label">
                <input id="update-avatar-link" name="link" className="popup__input popup__input_type_link"
                    type="url" placeholder="Ссылка на аватар" required minlength="2" />
                <span className="popup__input-error update-avatar-link-error">Текст ошибки</span>
            </label>
            <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
    </div>
</section> */}
