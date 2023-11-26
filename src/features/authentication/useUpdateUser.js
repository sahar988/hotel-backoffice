import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("user updated successfully");
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries({ queryKey: "user" });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateUser, isLoading };
}
