import Head from 'next/head';
import DrawerAppBar from './AppBar';
import FooterNav from './FooterNav';
import {BottomNavigation, Container} from '@mui/material';
import Meta from './Meta';
import SimpleBottomNavigation from './BottomAppBar';

export default function Layout({ children }) {
    return (
      <div>
        <Meta/>
        <Container  maxWidth="false" disableGutters={true}>
        <DrawerAppBar/>
        <main>{children}</main>
        <footer><FooterNav/>
        <SimpleBottomNavigation/>
        </footer>
        </Container>
      </div>
    )
  }
  