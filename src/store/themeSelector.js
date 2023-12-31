import { createSlice } from '@reduxjs/toolkit';

const initialState = 'светлая';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => state === 'светлая' ? 'темная' : 'светлая',
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;