import { create } from 'zustand';

interface Flight {
  id: string;
  airline: string;
  logo: string;
  flightCode: string;
  duration: string;
  stops: number;
  departureTime: string;
  arrivalTime: string;
  price: number;
  class: string;
  seats: number;
}

interface TravelStore {
  savedFlights: Flight[];
  currentBooking: Flight | null;
  saveFlight: (flight: Flight) => void;
  setBooking: (flight: Flight) => void;
  clearBooking: () => void;
}

export const useTravelStore = create<TravelStore>((set) => ({
  savedFlights: [],
  currentBooking: null,
  saveFlight: (flight) => set((state) => ({ savedFlights: [...state.savedFlights, flight] })),
  setBooking: (flight) => set({ currentBooking: flight }),
  clearBooking: () => set({ currentBooking: null }),
}));
