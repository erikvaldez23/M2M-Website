import React from 'react';
import { Box, Typography, Grid, Avatar, Button, Paper } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HealingIcon from '@mui/icons-material/Healing';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const teamMembers = [
  {
    name: 'Dr. Emily Johnson',
    role: 'Lead Physical Therapist',
    specialties: ['Sports Rehabilitation', 'Orthopedic Therapy', 'Post-Surgical Recovery'],
    image: 'https://via.placeholder.com/300',  // Replace with actual image URL
    link: 'https://example.com/emily-johnson', // Replace with actual link
  },
  {
    name: 'Michael Smith',
    role: 'Certified Physiotherapist',
    specialties: ['Manual Therapy', 'Neurological Rehab', 'Pain Management'],
    image: 'https://via.placeholder.com/300',  // Replace with actual image URL
    link: 'https://example.com/michael-smith', // Replace with actual link
  },
];

const MeetTheTeam = () => {
  return (
    <Box
      sx={{
        background: '#000',
        py: 8,
        px: 4,
        minHeight: '20vh',
      }}
    >
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
        Meet The Team
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 4,
                borderRadius: '20px',
                height: '100%',  // Make cards the same height
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              {/* Profile Image */}
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  mb: 3,
                }}
              />

              {/* Info Section */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000' }}>
                  {member.name}
                </Typography>
                <Typography variant="h6" sx={{ color: '#ccc', mb: 2 }}>
                  {member.role}
                </Typography>

                {/* Specialties List with Icons */}
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {member.specialties.map((specialty, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                      {i === 0 && <FitnessCenterIcon sx={{ color: '#000', mr: 1 }} />}
                      {i === 1 && <HealingIcon sx={{ color: '#000', mr: 1 }} />}
                      {i === 2 && <LocalHospitalIcon sx={{ color: '#000', mr: 1 }} />}
                      <Typography variant="body1">{specialty}</Typography>
                    </li>
                  ))}
                </Box>

                {/* Learn More Button */}
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    borderRadius: '30px',
                    textTransform: 'none',
                    px: 4,
                    py: 1.5,
                    backgroundColor: '#000',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: "#000",
                      border: "3px solid #000"
                    },
                  }}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetTheTeam;
