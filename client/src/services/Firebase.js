import { firebase } from "../lib/Firebase";

export const getUserByUserId = async (userId) => {
    const res = await firebase.firestore().collection("users").where("userId", "==", userId).get();
    if (res.docs.length > 0)
        return {
            docId: res.docs[0].id,
            ...res.docs[0].data()
        }
}

export const addNewUser = async (data) => {
    await firebase.firestore().collection("users").add(data);
}

export const doesEmailExist = async (email) => {
    const res = await firebase.firestore().collection("users").where("email", "==", email).get();
    if (res.docs.length > 0)
        return true;
    else
        return false;
}

export const updateAvatarWithUserId = async (docId, avatarImgSrc) => {
    await firebase.firestore().collection("users").doc(docId).update({
        avatarImgSrc: avatarImgSrc
    });
}

export const postRealTimeDataToFirebase = async (arduinoKey, activeStatus) => {
    await firebase.database().ref("tanks/" + arduinoKey).update({
        activeStatus: activeStatus,
    })
}