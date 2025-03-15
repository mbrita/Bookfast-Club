import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // основной цвет приложени
      light: '#555555', // цвет для затенений
      contrastText: '#3755D7', // цвет контраста и активных кнопок
    },
    secondary: {
      main: '#3755D7', // основной цвет для кнопок и акцентов
      light: '#5A7FF7', // светлый оттенок синего
      dark: '#0038A0', // темный оттенок синего для выделения
    },
    background: {
      default: '#f4f4f4', // светлый фон страницы
      paper: '#ffffff', // фон для карточек, модальных окон
    },
    text: {
      primary: '#22201F', // основной цвет текста
      secondary: '#777777', // для менее акцентированных текстов
    },
  },
});
