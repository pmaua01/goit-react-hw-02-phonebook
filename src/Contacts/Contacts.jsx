export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <button id={contact.id} type="button" onClick={onDelete}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
