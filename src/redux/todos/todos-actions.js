import types from './todos-types';
import { v4 as uuidv4 } from 'uuid';

const addContacts = (name, number) => {
  return {
    type: types.ADD,
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
};

const deleteContacts = contactsId => {
  return { type: types.DELETE, payload: contactsId };
};

const filterContacts = text => {
  return { type: types.CHANGE_FILTER, payload: text };
};

export { addContacts, deleteContacts, filterContacts };
