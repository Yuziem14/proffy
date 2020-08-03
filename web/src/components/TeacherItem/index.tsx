import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars3.githubusercontent.com/u/42475688?s=460&u=6b2fb798bcd408da8bcc5304311c17babb11e651&v=4g'
          alt='Yuri Ziemba'
        />
        <div>
          <strong>Yuri Ziemba</strong>
          <span>Química</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de química avançada.</p>
      <p>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp Icon' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
