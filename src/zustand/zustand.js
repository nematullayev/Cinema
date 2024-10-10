import { toast } from "react-toastify";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = (set) => ({
  tickets: [],
  setTicket: (ticket) =>
    set((state) => {
      const ticketExists = state.tickets.some((t) => t.id === ticket.id);

      if (!ticketExists) {
        return { tickets: [...state.tickets, ticket] };
      } else {
        toast.warning("Siz alaqochon Bilet olib bogansiz");
        return state;
      }
    }),
  deleteTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter((ticket) => ticket.id !== id),
    })),
});

useStore = persist(useStore, { name: "settings" });
useStore = devtools(useStore);

export default create(useStore);
