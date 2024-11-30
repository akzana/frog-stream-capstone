import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function GridLayout({ users, id }) {
  const fisherYatesShuffle = (array) => {
    const clonedArray = [...array];
    for (let i = clonedArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [clonedArray[i], clonedArray[randomIndex]] = [clonedArray[randomIndex], clonedArray[i]];
    }
    return clonedArray;
  };
  const slicedUsers = fisherYatesShuffle(users).slice(0, 4);
  console.log(slicedUsers);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {slicedUsers?.map((user, index) => {

          if (index % 3 === 0) {
            return (

              

                <Grid size={{ xs: 6, md: 8 }}>
                  <Link to={`stream/${id}`}><Item>{user.channelName}</Item></Link>
                </Grid>
              

            )
          }
          else {

            return (

              

                <Grid size={{ xs: 6, md: 4 }}>
                  <Link to={`stream/${id}`}><Item>{user.channelName}</Item></Link>
                </Grid>
              
            )
          }

        })}
      </Grid>
    </Box>
  );
}