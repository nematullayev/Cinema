import { toast } from "react-toastify";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = (set) => ({
  tickets: [],
  setTicket: (ticket) =>
    set((state) => {
      // Check if ticket ID already exists in the tickets array
      const ticketExists = state.tickets.some((t) => t.id === ticket.id);

      // If it doesn't exist, add the ticket
      if (!ticketExists) {
        return { tickets: [...state.tickets, ticket] };
      } else {
        toast.warning("Ticket with this ID already exists:", ticket.id);
        return state; // No update to state if the ticket exists
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
