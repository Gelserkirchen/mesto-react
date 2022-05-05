import { useEffect, useState } from 'react';
import { api } from '../utils/api.js'
import Card from '../components/Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
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
                    cards.map((card) => {
                        return <Card cardData={card} onCardClick={onCardClick} key={card._id} />
                    })
                }
            </section>
        </main>
    );
}

export default Main; 