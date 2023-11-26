import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("booking deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: () => toast.error("errorrr delete"),
  });

  return { deleteBooking, isDeleting };
}
