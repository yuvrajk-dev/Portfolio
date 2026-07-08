import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL);
console.log(import.meta.env.VITE_SOCKET_URL);
