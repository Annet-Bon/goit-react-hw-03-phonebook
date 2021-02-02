import ContactListItem from '../ContactListItem';
import styles from './contactList.module.css';

export default function ContactList ({ contacts, onDeleteContact}) {
    return(
        <ul className={styles.list}>
            {contacts.map(contact => (
                <li key={contact.id} className={styles.item}>
                    <ContactListItem contact={contact} onDeleteContact={onDeleteContact}/>
                </li>
            ))}
        </ul>
    );
}