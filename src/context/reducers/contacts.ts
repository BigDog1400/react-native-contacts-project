import {ActionMap} from '../../utils/actionMap';
import {contactType} from '../initialStates/contactState';

export enum Types {
  GET_CONTACTS = 'GET_CONTACTS',
}

type ContactsPayload = {
  [Types.GET_CONTACTS]: {};
};

export type ContactsAction =
  ActionMap<ContactsPayload>[keyof ActionMap<ContactsPayload>];

const contacts = (state: contactType, action: ContactsAction) => {
  switch (action.type) {
    case Types.GET_CONTACTS:
      return state;
    default:
      return state;
  }
};

export default contacts;
