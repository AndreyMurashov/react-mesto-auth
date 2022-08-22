import React, { useContext } from "react";
// import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Main = (props) => {
  // const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  return (
    <main className="main">
      <section className="profile">
        <img className="profile__avatar" src={avatar} alt="Фото профиля" />
        <button
          className="profile__avatar-btn"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__status">{about}</p>
          <button
            type="button"
            className="profile__edit"
            aria-label="button-edit"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          className="profile__add"
          aria-label="button-add"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => {
           return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          )
        })}
      </section>
    </main>
  );
};

export default Main;
