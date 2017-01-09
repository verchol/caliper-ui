
import * as types from './selectionActionTypes';

export function selectionSetSelectedSignature(signature) {
    return {type: types.SELECTION__SET_SELECTED_SIGNATURE, signature};
}

export function selectionSetSelectedSignatures(signatures) {
    return {type: types.SELECTION__SET_SELECTED_SIGNATURES, signatures};
}

export function selectionSetSelectedProfile(profile) {
    return {type: types.SELECTION__SET_SELECTED_PROFILE, profile};
}

export function selectionSetSelectedProfiles(profiles) {
    return {type: types.SELECTION__SET_SELECTED_PROFILES, profiles};
}
