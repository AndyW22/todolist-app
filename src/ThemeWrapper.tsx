import { MuiThemeProvider } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import { useAppSelector } from './redux/store';
import { selectTheme } from './redux/theme/themeSlice';
import { darkTheme, lightTheme, materialUI } from './styles/themes';

interface Props {
  children: React.ReactNode;
}

export const ThemeWrapper = ({ children }: Props): ReactElement => {
  const theme = useAppSelector(selectTheme);
  const themeMode = theme ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={materialUI}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
