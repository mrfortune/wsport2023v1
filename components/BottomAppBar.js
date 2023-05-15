import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import myLoader from "../components/Loader";
import Image from "next/image";
export default function SimpleBottomNavigation() {
const [value, setValue] = React.useState(0);

return (
  <Box className="footerBG" sx={{ display: 'flex',  justifyContent:'center', borderTop:1, borderTopColor:'#545252', paddingTop:'1rem', paddingLeft:'1rem', paddingRight:'1rem', textAlign:'center' }}>
      {/* <Box sx={{ flexGrow: 1, }}> */}
{/* <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            flexGrow: 1,
            mr: 16,
            display: { xs: 'block', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
        <Image 
        loader={myLoader}
        src="assets/wslogo7.png"
        width={176} height={32} 
        alt="Logo">

        </Image>
        </Typography> */}
          {/* </Box> */}
          <Box sx={{ display: { xs: 'block', sm: 'block', md:'block', xl:'block', lg:'block' } }}>
        <Typography variant="subtitle" sx={{ fontSize: ".75rem", color:"#fafafa"}}>
                &copy; 2023 WorldShaker Interactive, Inc. All rights reserved.
              </Typography> 
     
   </Box>
  </Box>
);
}