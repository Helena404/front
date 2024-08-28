// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Хранит информацию о пользователе
  permissions: [], // Хранит права доступа
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.permissions = action.payload.permissions; // Установка прав доступа
    },
    clearUser: (state) => {
      state.user = null;
      state.permissions = [];
    },
  },
});

// Экспорт действий
export const { setUser, clearUser } = authSlice.actions;

// Экспорт селекторов
export const selectUser = (state) => state.auth.user;
export const selectPermissions = (state) => state.auth.permissions;

// Экспорт reducer
export default authSlice.reducer;
