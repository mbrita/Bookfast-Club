import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router';
import { Header } from './Header';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      data-testid="Layout"
    >
      <header>
        <Header />
      </header>
      <main
        style={{
          flex: 1,
        }}
      >
        <Container maxWidth="lg" sx={{ flex: 1 }}>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </Box>
  );
};
