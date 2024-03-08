export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type INewMovement = {
  userId: string;
  type: string;
  amount: string;
  date: Date;
  description: string;
  category: string;
};