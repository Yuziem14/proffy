import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  phone_number: string;
  bio: string;
  subject: string;
  cost: number;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }
  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target='_blank'
          href={`https://wa.me/${teacher.phone_number}`}
          type='button'
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt='Whatsapp Icon' />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
