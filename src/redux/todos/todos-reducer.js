import { combineReducers } from 'redux';
import types from './todos-types';

const innitialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+380994591256' },
  { id: 'id-2', name: 'Hermione Kline', number: '+380994438912' },
  { id: 'id-3', name: 'Eden Clements', number: '+380996451779' },
  { id: 'id-4', name: 'Annie Copeland', number: '+380992279126' },
];

const items = (state = innitialItems, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
export default combineReducers({ items, filter });
