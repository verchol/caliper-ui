import * as types from '../actions/selectionActionTypes';

const defaultState = {
    profiles: [],
    signatures: []
};

export default function signatureReducer(state = defaultState, action) {
    switch (action.type) {
        case types.SELECTION__SET_SELECTED_PROFILE:
            return Object.assign({}, state, { profiles: [action.profile] });
        case types.SELECTION__SET_SELECTED_PROFILES:
            return Object.assign({}, state, { profiles: action.profiles });
        case types.SELECTION__SET_SELECTED_SIGNATURE:
            return Object.assign({}, state, { signatures: [action.signature] });
        case types.SELECTION__SET_SELECTED_SIGNATURES:
            return Object.assign({}, state, { signatures: action.signatures });
        default:
            return state;
    }
}
