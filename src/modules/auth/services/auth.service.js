import { firestore, auth } from "../../firebase/firebase.utils";

/**
 * Users Service
 */
export default class AuthService {
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
    const userSnapshot = await userRef.get();

    // We only store user data in the user's collection if the user does not already exist
    if (!userSnapshot.exists) {
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

  /**
   * Sign up with email and password using firebase firestore
   */
  static signUpWithEmailAndPassword = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  /**
   * Sign in with email and password using firebase firestore
   */
  static signInWithEmailAndPassword = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
}
