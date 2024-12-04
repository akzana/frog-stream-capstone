import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import "./GridLayout.scss";

const Item = styled(Paper)(({ theme, backgroundImage }) => ({
  backgroundImage: `url(${backgroundImage})`,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "#fff",
  fontWeight: '900',
  textDecoration: "none",
  height: " 25vh",
  // ...theme.applyStyles('dark', {
  //   backgroundColor: '#fff',
  // }),
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {slicedUsers?.map((user, index) => {

          if (index % 3 === 0) {
            return (



              <Grid
                size={{ xs: 6, md: 8 }}
                key={user.id}
              >
                <Link to={`stream/${id}`} >
                  <Item backgroundImage={user.profilePic} >
                    {user.channelName}
                  </Item>
                </Link>
              </Grid>


            )
          }
          else {

            return (


              // debug here
              <Grid size={{ xs: 6, md: 4 }}>
                <Link to={`stream/${id}`}>
                  <Item backgroundImage={user.profilePic}>
                    {user.channelName}
                  </Item>
                </Link>
              </Grid>

            )
          }

        })}
      </Grid>
    </Box>
  );
}