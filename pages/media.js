import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Head from 'next/head';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Meta from "../components/Meta";
import { Link } from "@nextui-org/react";
import { useRouter } from 'next/router';

// Each individual "crumb" in the breadcrumbs list
function Crumb({ text, href, last=false }) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <Typography color="text.primary">{text}</Typography>
  }

  // All other crumbs will be rendered as links that can be visited 
  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  );
}
export default function StandardImageList() {
  return (
    <div>
   <Meta title="WorldShaker Interactive::Contact" />
     <Box component="div" padding={0}  mt={15} mb={10}  direction="row" display='flex' alignItems='center' justifyContent='center'>
<Grid container spacing={2} sx={{maxWidth:'md'}}>
<Breadcrumbs aria-label="breadcrumb" />
  <Grid item>
    <ImageList sx={{ width: 900, height: 550 }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
    </Grid>
    </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

