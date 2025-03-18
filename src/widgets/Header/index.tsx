import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import MainLogo from './MainLogo.svg';
import { theme } from '@/shared/config/theme/Theme';

const navInfo = [
  { text: 'Главное', link: '/' },
  { text: 'Мои книги', link: '/' },
  { text: 'Комиксы', link: '/' },
  { text: 'Детям', link: '/' },
];

const Logo = ({ onClick, clicked }: { onClick: () => void; clicked: boolean }) => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}>
      <img
        src={MainLogo}
        alt="Logo"
        style={{
          height: '50px',
          transition: 'transform 0.1s ease',
          transform: clicked ? 'scale(0.95)' : 'scale(1)',
        }}
        onClick={onClick}
      />
    </Link>
  );
};

const NavLink = ({
  text,
  link,
  isActive,
  onClick,
  theme,
}: {
  text: string;
  link: string;
  isActive: boolean;
  onClick: () => void;
  theme: any;
}) => {
  return (
    <Link to={link} style={{ textDecoration: 'none', marginLeft: theme.spacing(3) }}>
      <Typography
        sx={{
          marginLeft: 1,
          pb: 2,
          cursor: 'pointer',
          fontSize: '16px',
          color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
          borderBottom: isActive
            ? `2px solid ${theme.palette.primary.contrastText}`
            : `2px solid transparent`,
          '&:hover': {
            color: theme.palette.primary.contrastText,
            borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
          },
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        }}
        onClick={onClick}
      >
        {text}
      </Typography>
    </Link>
  );
};
const SideMenu = () => {
  return (
    <DensityMediumIcon
      sx={{
        marginLeft: 1,
        cursor: 'pointer',
        fontSize: '40px',
        pb: 2,
        '&:hover': {
          color: theme.palette.primary.contrastText,
          borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
          display: 'block',
        },
      }}
    />
  );
};
const Header = () => {
  const [active, setActive] = useState('');
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);

  const handleClickLogo = () => {
    setClicked(!clicked);
    setTimeout(() => {
      setClicked(false);
    }, 200);
  };

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
          <Logo onClick={handleClickLogo} clicked={clicked} />
          {navInfo.map((item) => (
            <NavLink
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
          <Link to="/" style={{ display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}>
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
          </Link>
          <SideMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
