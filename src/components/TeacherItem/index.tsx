import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/14803717?s=460&u=6a7e534056ea2670c55ce755828c715885d2b102&v=4" alt="Felipe Saraiva"/>
                <div>
                    <strong>Felipe Saraiva</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Descrição do perfil
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>

            </footer>
        </article>
    )
}

export default TeacherItem;