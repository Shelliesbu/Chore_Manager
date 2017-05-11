import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    CHORE_UPDATE,
    CHORE_CREATE,
    CHORES_FETCH_SUCCESS,
    CHORE_SAVE_SUCCESS
    } from './types';

export const choreUpdate = ({ prop, value }) => {
    return {
        type: CHORE_UPDATE,
        payload: { prop, value }
    };
};

export const choreCreate = ({ name, description, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/chores`)
            .push({ name, description, phone, shift })
            .then(() => {
                dispatch({ type: CHORE_CREATE });
                Actions.choreList({ type: 'reset'});

        });
     };
};

export const choreFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/chores`)
            .on('value', snapshot => {
                dispatch({ type: CHORES_FETCH_SUCCESS, payload: snapshot.val() });
            });
       };
};

export const choreSave = ({ name, description, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/chores/${uid}`)
            .set({ name, description, phone, shift })
            .then(() => {
                dispatch({ type: CHORE_SAVE_SUCCESS });
                Actions.choreList({ type: 'reset' });
            });
    };
};

export const choreDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/chores/${uid}`)
            .remove()
            .then(() => {
                Actions.choreList({ type: 'reset'});
            });
    };
};