import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const InsightsPanel = () => (
  <Box
    sx={{
      padding: 3,
      backgroundColor: '#f5f5f5',
      borderRadius: 2,
      marginBottom: 2,
      boxShadow: 1,
    }}
  >
    <Typography variant="h6">Hi Mona,</Typography>
    <Typography>68% of goal achieved this month!</Typography>
    <Button variant="contained" sx={{ marginTop: 2 }}>
      View Details
    </Button>
  </Box>
);

export default InsightsPanel;
