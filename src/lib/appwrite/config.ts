import {Client, Databases, Account, Storage, Avatars} from 'appwrite'

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  movementCollectionId: import.meta.env.VITE_APPWRITE_MOVEMENTS_COLLECTION_ID,
  categoryCollectionId: import.meta.env.VITE_APPWRITE_CATEGORIES_COLLECTION_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);