import { SxProps, Theme } from "@mui/material/styles";


export const containerSx: SxProps<Theme> = {
  backgroundColor: '#1f2937',
  height: (theme) => theme.spacing(53),
  width: '100vw',
  pt: 8,
  
};

export const HeroMainSx: SxProps<Theme> = {
  fontSize: (theme) => theme.spacing(6),
  color: '#F9FAF8',
  fontWeight: 900,
};

export const HeroSecondarySx: SxProps<Theme> = {
  fontSize: (theme) => theme.spacing(2.25),
  color: '#E5E7EB',
};

export const LogoSx: SxProps<Theme> = {
  fontSize: (theme) => theme.spacing(3),
  color: '#F9FAF8',
};