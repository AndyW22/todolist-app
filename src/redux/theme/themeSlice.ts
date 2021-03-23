import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: true,
  reducers: {
    toggleDarkMode: (state) => {
      if (!state) {
        return true;
      } else return false;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export const selectTheme = (state: RootState): boolean => state.theme;

export default themeSlice.reducer;
