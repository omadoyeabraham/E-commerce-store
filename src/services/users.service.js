import { firestore } from "../firebase/firebase.utils";

/**
 * Users Service
 */
export default class UserService {
  /**
   * Create a document in the users collection,if a new user signs in using Google.
   * @param {*} authUser
   * @param {*} additionalData
   */
  static createAuthenticatedUserProfile = async (
    authUser,
    additionalData = {}
  ) => {
    if (!authUser) return;

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const userData = await userRef.get();

    // We only store user data in the user's collection if the user does not already exist
    if (!userData.exists) {
      const { displayName, email } = authUser;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.error(error);
      }
    }

    return userRef;
  };
}
