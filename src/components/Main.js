import { useEffect, useState } from 'react';
import { api } from '../utils/api.js'

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    const [userName, setUserName] = useState('Жак Ив Кусто');
    const [userAvatar, setUserAvatar] = useState('');
    const [userDescription, setUserDescription] = useState('Исследователь океана');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getProfile()
            .then(res => {
                setUserName(res.name);
                setUserAvatar(res.avatar);
                setUserDescription(res.about);
            })

        api.getInitialCards()
            .then(res => {
                setCards(res)
                console.log(res)
            })
    }, [userName])

    return (
        <main className="content">
            <section className="profile">
                <a style={{ backgroundImage: `url(${userAvatar})` }} href="#" className="profile__avatar" alt="Аватар" onClick={onEditAvatar}></a>
                <div className="profile__info">
                    <div className="profile__name-section">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="cards">

                {
                        //   <template className="card__template">
                        //   <div className="card">
                        //     <button className="card__delete-button" type="button"></button>
                        //     <img src="#" className="card__image" alt="Картинка места" />
                        //     <div className="card__description">
                        //       <h2 className="card__text"></h2>
                        //       <div className="card__like-section">
                        //         <button className="card__like-button" type="button"></button>
                        //         <span className="card__like-number"></span>
                        //       </div>
                        //     </div>
                        //   </div>
                        // </template>
                }

            </section>
        </main>
    );
}

export default Main; 