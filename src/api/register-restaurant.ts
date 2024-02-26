import { api } from "@/lib/axios";

export interface registerRestaurantBody {
  email: string;
  phone: string;
  managerName: string;
  restaurantName: string;
}

export async function registerRestaurant({ 
  phone,
  email,
  managerName,
  restaurantName,
}: registerRestaurantBody) {
  await api.post("/restaurants", { 
   phone,
   email,
   managerName,
   restaurantName,
   });
}
