import { create } from "zustand";

interface AuthState {
    isAuth: boolean;
    token: string | null;
    setToken: (tokenValue:string) => void;
}

export const useAuthStore = create<AuthState>(
    (set) => ({
        isAuth: false,
        token: null,
        setToken: (tokenValue) => {

        }
    })
)