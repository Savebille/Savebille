import { ID, Query } from 'appwrite';

import { appwriteConfig, account, databases, avatars } from './config';
import { INewMovement, INewUser } from '@/types';

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession('current');
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function createMovement(movement: INewMovement) {
  try {
    // Create movement
    const newMovement = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.movementCollectionId,
      ID.unique(),
      {
        creator: movement.userId,
        type: movement.type,
        amount: movement.amount,
        date: movement.date,
        description: movement.description,
        category: movement.category,
      }
    );

    if (!newMovement) {
      throw Error;
    }

    return newMovement;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovementByUserId() {
  try {
    const currentUser = await getCurrentUser();

    const movementDocuments = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.movementCollectionId,
      //@ts-ignore
      [Query.equal('creator', currentUser.$id)]
    );

    const { documents } = movementDocuments;

    if (!movementDocuments) {
      throw Error;
    }

    return documents;
  } catch (error) {
    console.error(error);
  }
}

