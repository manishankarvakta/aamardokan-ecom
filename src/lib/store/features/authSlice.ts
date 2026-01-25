import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    accessToken?: string | null;
    type?: string | null;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
    },
});

export const { loginSuccess, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
