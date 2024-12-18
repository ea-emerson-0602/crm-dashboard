import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const LeadModal = ({ open, handleClose, lead }) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', borderRadius: 2 }}>
      <Typography variant="h6">{lead?.name}</Typography>
      <Typography>{lead?.details}</Typography>
    </Box>
  </Modal>
);

export default LeadModal;
