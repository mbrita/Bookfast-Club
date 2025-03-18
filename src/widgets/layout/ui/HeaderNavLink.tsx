import { Theme, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';

interface INavLink {
  text: string;
  link: string;
  isActive: boolean;
  onClick?: () => void;
  theme: Theme;
}

export const HeaderNavLink = ({ text, link, isActive, onClick, theme }: INavLink) => {
  return (
    <RouterLink to={link} style={{ textDecoration: 'none', marginLeft: theme.spacing(3) }}>
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
    </RouterLink>
  );
};
