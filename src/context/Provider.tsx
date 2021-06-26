import React, {createContext, useReducer} from 'react';
import {ReactNode} from 'react';
import authInitialState from './initialStates/authState';
import {authType} from './initialStates/authState';
import {contactType} from './initialStates/contactState';
import contactInitialState from './initialStates/contactState';
import auth, {AuthActions} from './reducers/auth';
import contacts, {ContactsAction} from './reducers/contacts';

type InitialStateType = {
  authState: authType;
  contactsState: contactType;
};

const initialState = {
  authState: authInitialState,
  contactsState: contactInitialState,
};

export const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  {authState, contactsState}: InitialStateType,
  action: AuthActions | ContactsAction,
) => ({
  authState: auth(authState, action as AuthActions),
  contactsState: contacts(contactsState, action as ContactsAction),
});
function GlobalProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}

export {GlobalProvider};
