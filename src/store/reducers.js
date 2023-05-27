const initialState = {
  authToken: null,
  user: [],
  wallet: [],
  transaction: [],
  bank: [],
  card: [],
  phonenumbers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, //copy all previous states
        authToken: action.payload,
      };
    case 'USER':
      return {
        ...state,
        user: action.user,
      };
    case 'WALLET':
      return {
        ...state,
        wallet: action.wallet,
      };
    case 'TRANSACTION':
      return {
        ...state,
        transaction: action.transaction,
      };
    case 'BANK':
      return {
        ...state,
        transaction: action.bank,
      };
    case 'CARD':
      return {
        ...state,
        transaction: action.card,
      };
    case 'PHONENUMBERS':
      return {
        ...state,
        transaction: action.phonenumbers,
      };
    case 'LOGOUT':
      return {
        authToken: null,
        user: [],
        wallet: [],
        transaction: [],
        bank: [],
        card: [],
        phonenumbers: [],
      };

    default:
      return state;
  }
};
