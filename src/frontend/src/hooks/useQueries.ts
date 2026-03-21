import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useRegister() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: { username: string; password: string }) => {
      if (!actor) throw new Error("Not connected");
      const result = await actor.register(username, password);
      return result;
    },
  });
}

export function useLogin() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: { username: string; password: string }) => {
      if (!actor) throw new Error("Not connected");
      const result = await actor.login(username, password);
      return result;
    },
  });
}
