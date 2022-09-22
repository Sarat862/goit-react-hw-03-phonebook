import css from './ContactList.module.css'
import PropTypes from 'prop-types';

export function ContactList({items, onRemoveContact}) {
  return (
    <ul >
          {items.map(({ id, name, number }) => 
            <li className={css.contactList__item} key={id}>{name}: {number}
            <button className={css.contactList__btn} onClick={()=> onRemoveContact(id)}>Delete</button>          
          </li>
          )}
    </ul>
  )
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })).isRequired,
  onRemoveContact: PropTypes.func.isRequired
}