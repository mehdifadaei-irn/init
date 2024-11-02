import { getListAllAddresses } from "@/http/end-point/prac";
import { useQuery } from "@tanstack/react-query";

export const useApiProductsCall = () => {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getListAllAddresses(null, signal),
    select: (data) => {
      return data?.data;
    },
    enabled: true,
  });

  return {
    data,
    isPending,
  };
};
