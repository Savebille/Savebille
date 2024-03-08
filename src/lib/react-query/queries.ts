import {
  useMutation, useQueryClient,
} from "@tanstack/react-query";

import {
  createMovement,
  createUserAccount,
  signInAccount,
  signOutAccount,
} from "@/lib/appwrite/api";
import { INewMovement, INewUser } from "@/types";
import { QUERY_KEYS } from "./queryKeys";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useCreateMovement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (movement: INewMovement) => createMovement(movement),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_MOVEMENTS],
      });
    },
  });
};
