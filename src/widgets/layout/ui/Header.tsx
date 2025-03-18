import { Box, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';

import MainLogo from '../../../shared/assets/MainLogo.svg';
import { HeaderNavLink } from './HeaderNavLink';

const headerInfo = [
  { text: 'Главное', link: '/' },
  { text: 'Мои книги', link: '/' },
  { text: 'Комиксы', link: '/' },
  { text: 'Детям', link: '/' },
];

export const Header = () => {
  const [active, setActive] = useState('');
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      height="64px"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
    >
      <Box
        display="flex"
        alignItems="flex-end"
        height="100%"
        width="100%"
        marginLeft={1}
        sx={{
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
            marginLeft: 1,
          },
        }}
      >
        <Box display="flex" alignItems="flex-end">
          <RouterLink
            to="/"
            style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}
          >
            <img
              src={MainLogo}
              alt="Logo"
              style={{
                height: '50px',
              }}
            />
          </RouterLink>
          {headerInfo.map((item) => (
            <HeaderNavLink
              key={item.text}
              text={item.text}
              link={item.link}
              isActive={active === item.text}
              onClick={() => setActive(item.text)}
              theme={theme}
            />
          ))}
        </Box>
        <Box display="flex">
          <RouterLink
            to="/"
            style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}
          >
            <SearchIcon
              sx={{
                marginLeft: 1,
                cursor: 'pointer',
                fontSize: '40px',
                pb: 2,
                color:
                  active === 'search'
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                borderBottom:
                  active === 'search'
                    ? `2px solid ${theme.palette.primary.contrastText}`
                    : '2px solid transparent',
                '&:hover': {
                  color: theme.palette.primary.contrastText,
                  borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
                },
              }}
              onClick={() => setActive('search')}
            />
          </RouterLink>
        </Box>
      </Box>
    </Box>
  );
};
