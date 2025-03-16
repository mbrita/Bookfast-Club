import { UserList } from '@/features/UserList/UserList';
import { Typography, useTheme } from '@mui/material';

export const Main = () => {
  const theme = useTheme();

  return (
    <>
      <Typography color={theme.palette.text.primary}>Welcome home!</Typography>
      <UserList />
    </>
  );
};
