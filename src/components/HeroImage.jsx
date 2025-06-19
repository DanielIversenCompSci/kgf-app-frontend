import React from 'react';
import { Box } from '@mui/material';
import { klintehuseBanner } from '../assets';

const HeroImage = ({ 
  imageUrl = klintehuseBanner, 
  altText = 'Hero image',
  verticalPosition = "45%"
}) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '450px',
        overflow: 'hidden',
        position: 'fixed',
        top: '64px',
        left: 0,
        right: 0,
        display: { xs: 'none', sm: 'block' }
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={altText}
        sx={{
          width: '100vw',
          height: '100%',
          objectFit: 'cover',
          objectPosition: `center ${verticalPosition}`
        }}
      />
    </Box>
    
  );
};

export default HeroImage;