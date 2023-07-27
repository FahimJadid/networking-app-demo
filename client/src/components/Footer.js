import { Card, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          Copyright © 2023{' '}
          <a href="https://github.com/Lamiamoon/CampulsePlus" target="_blank">
            Campulse+
          </a>
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;
