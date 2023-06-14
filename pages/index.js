import {
  Box,
  CardActionArea,
  CardActions,
  Stack,
  Card,
  Item,
  Container,
} from "@mui/material";
import { Button, css } from "@nextui-org/react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { AnimatePresence } from "framer-motion";
import { Card4 } from "../components/Card4";
import { Card5 } from "../components/Card5";
import { Card1 } from "../components/Card1";
import { Text } from "@nextui-org/react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { textAlign } from "@mui/system";
export default function Home() {
  return (
    <>
      <Meta title="WorldShaker Interactive::Home" />
      <Box
        component="section"
        className="homeHero"
        padding={0}
        direction="column"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Box
          className="heroText"
          component="div"
          maxWidth="lg"
          sx={{
            display: "flex",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
            height: "auto",
            width: "100%",
          }}
        >
          <Grid  container spacing={2} mt={2} sx={{ maxWidth: "lg" }}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} pt={10}>
              <Text h1 className="boujee-text"  css={{
                  marginBottom:"$6",
                  marginTop:"$10",
                  
                }}>
                <span>Impactful</span><br></br> Digital Business <span><br></br>Transformation</span>
              </Text>
              <Text
                className="headerBody"
                color="#fafafa"
                css={{
                  fontWeight: "400",
                  marginBottom:"$6",
                  textAlign:'left'
                }}
              >
                Identifying the right problems through user research methodologies to design and deliver human-centered solutions.
              </Text>
              <Box component="div" sx={{ display: {xs:"block", sm:"block", md:"none", lg:"none", xl:"none"} }}>
 <Image
                src="blackLadyexec3.png"
                width={422}
                height={422}
                alt="Black Lady" 
              ></Image>
              </Box>
             <Box component="div" display="flex" sx={{justifyContent:{xs:"center", sm:"center", md:"left", lg:"left", xl:"left"}}}>
               <Button size="lg" color="secondary" css={{ borderRadius: "$2xl" }} >
                <Link
                  href="/contact"
                  css={{ color: "primaryLinkText", fontSize: '$sm', fontWeight:"$normal" }}
                >
                  Let's talk about your project
                </Link>
              </Button>
             </Box>
             
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{ display: {xs:"none", sm:"none", md:"block", lg:"block", xl:"block"} }}>
            <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    ><Image
                src="blackLadyexec3.png"
                width={722}
                height={722}
                alt="Black Lady"
              ></Image>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="workcbanner.png"
                        width={1920}
                        height={240}
                        alt=""
                      >
                      </Image>
                    </motion.div>
          </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Box
        className="homePage"
        direction="row"
        display="flex"
        justifyContent="center"
        component="div"
        sx={{
          backgroundColor:'#1a354f'
        }}
      >
        <Grid container sx={{ maxWidth: "lg" }} spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="workbbanner.png"
                        width={1920}
                        height={240}
                        alt=""
                      >
                      </Image>
                    </motion.div>
          </Grid>
          </Grid>
      </Box> */}
      <Box
        className="homePage"
        direction="row"
        display="flex"
        justifyContent="center"
        component="section"
        id="whatWeDo"
        sx={{
          backgroundColor: "#f9f9f9",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Grid container sx={{ maxWidth: "lg", marginTop: "0" }} spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={0}>
          <Typography variant="h2" sx={{textAlign:"center"}}> What We Do</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3} pt={0}>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="discover.png" width={88} height={88} alt=""></Image>
            </Box>

            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Discover
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              Research with empathy to gather insights about your customers and
              users to make actionable decisions
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="define.png" width={88} height={88} alt=""></Image>
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Define
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              What is the problem that we are solving for? Who, what, where, when, and
              why, are central to asking the right questions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="design1.png" width={88} height={88} alt=""></Image>
            </Box>
            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Design
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              Ideating and creating sketches, wireframes, user flows, sitemaps,
              and hi-fidelity visual designs, and prototypes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Image src="dev1.png" width={88} height={88} alt=""></Image>
            </Box>

            <Typography
              variant="h4"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Develop
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
            >
              We build it. Testing, and delivering the best solution for your
              project using multiple technology options.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        className="homePage"
        direction="row"
        display="flex"
        justifyContent="center"
        component="section"
        sx={{ backgroundColor: "#f1eded" }}
      >
        <Grid container sx={{ maxWidth: "lg" }} spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={8}>
            <Typography variant="h2" sx={{ color: "#333", textAlign: "center" }}>
              Case Studies
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={10}>
            <Box component="div" className="list-wrap">
              <Box component="div">
                <Box
                  component="div"
                  className="case"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb={3}
                >
                  
                </Box>
                <Box component="div" display="flex" flexDirection="row" >
                  <Box component="div" width="50vw">
                    <Typography variant="h3">
                    Westside German Shepherd Rescue
                  </Typography>
                    <Typography variant="body1">
                      Read our case study on how we came up with a new design
                      for the very outdated look of sheprescue.org and improved
                      the look and user experience for their site.
                    </Typography>
                    <Button
                      size="sm"
                      color="secondary"
                      css={{ borderRadius: "$xl" }}
                    >
                      <Link
                        href="/west-side-german-shepherd"
                        css={{ color: "primaryLinkText", fontSize: "$sm" }}
                      >
                        Read more...
                      </Link>
                    </Button>
                  </Box>
                  <Box component="div" width="50vw" p={2}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="wgsrBlob2.png"
                        width={600}
                        height={600}
                        alt="West-Side German Shepherd Rescue"
                      ></Image>
                    </motion.div>
                  </Box>
                </Box>
                {/* <Box
                  component="div"
                  className="case"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb={3}
                >
                  <Typography variant="h3">
                    Fade Technology Solutions
                  </Typography>
                </Box> */}
                {/* <Box component="div" display="flex" flexDirection="row" >
                  <Box component="div" width="33vw">
                    <Typography variant="body1">
                      Fade Technology Solutions needed a dashboard solution
                      designed to manage their campaigns, users, brands, and
                      agencies. Read about our process and see what we came up
                      with.
                    </Typography>
                    <Button
                      size="sm"
                      color="secondary"
                      css={{ borderRadius: "$xl" }}
                    >
                      <Link
                        href="/fade-solutions"
                        css={{ color: "primaryLinkText", fontSize: "$sm" }}
                      >
                        Read more...
                      </Link>
                    </Button>
                  </Box>
                  <Box component="div" width="66vw" p={2}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="fadeTech.png"
                        width={960}
                        height={600}
                        alt=""
                      ></Image>
                    </motion.div>
                  </Box>
                </Box> */}
                {/* <Box
                  component="div"
                  className="case"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb={3}
                >
                  <Typography variant="h3">The Winery, Brooklyn</Typography>
                </Box> */}
                {/* <Box component="div" display="flex" flexDirection="row" >
                  <Box component="div" width="33vw">
                    <Typography variant="body1">
                      The Winery, Brooklyn is opening a new wine store in the
                      Prospect Leffertys-Gardens area of Brooklyn and needs a
                      website for that location. We worked with the team to
                      design the new site. Read on to learn our who, what,
                      where, and why.
                    </Typography>
                    <Button
                      size="sm"
                      color="secondary"
                      css={{ borderRadius: "$xl" }}
                      disabled
                    >
                      <Link
                        href="/"
                        css={{ color: "#333", fontSize: "$sm" }}
                      >
                       Coming soon..
                      </Link>
                    </Button>
                  </Box>
                  <Box component="div" width="66vw" p={2}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="wineryBK4.png"
                        width={960}
                        height={600}
                        alt=""
                      ></Image>
                    </motion.div>
                  </Box>
                </Box> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={10}>
          <Box
                  component="div"
                  className="case"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb={3}
                >
                 
                </Box>
                <Box component="div" display="flex" flexDirection="row" >
                <Box component="div" width="50vw" p={2}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="fadeBlob2.png"
                        width={600}
                        height={600}
                        alt=""
                      ></Image>
                    </motion.div>
                  </Box>
                  <Box component="div" width="50vw"> 
                  <Typography variant="h3">
                    Fade Technology Solutions
                  </Typography>
                    <Typography variant="body1">
                      Fade Technology Solutions needed a dashboard solution
                      designed to manage their campaigns, users, brands, and
                      agencies. Read about our process and see what we came up
                      with.
                    </Typography>
                    <Button
                      size="sm"
                      color="secondary"
                      css={{ borderRadius: "$xl" }}
                    >
                      <Link
                        href="/fade-solutions"
                        css={{ color: "primaryLinkText", fontSize: "$sm" }}
                      >
                        Read more...
                      </Link>
                    </Button>
                  </Box>
                 
                </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={8}>
          <Box
                  component="div"
                  className="case"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mb={3}
                >
               
                </Box>
                <Box component="div" display="flex" flexDirection="row" >
                  <Box component="div" width="50vw">   
                  <Typography variant="h3">The Winery, Brooklyn</Typography>
                    <Typography variant="body1">
                      The Winery, Brooklyn is opening a new wine store in the
                      Prospect Leffertys-Gardens area of Brooklyn and needs a
                      website for that location. We worked with the team to
                      design the new site. Read on to learn our who, what,
                      where, and why.
                    </Typography>
                    <Button
                      size="sm"
                      css={{ borderRadius: "$xl", backgroundColor:'#ccc' }}
                      disabled
                    >
                      <Link
                      className="disabledBtn"
                        href="/"
                        css={{ color: "#333", fontSize: "$sm" }}
                      >
                       Coming soon...
                      </Link>
                    </Button>
                  </Box>
                  <Box component="div" width="50vw" p={2}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src="wineBlob2.png"
                        width={600}
                        height={600}
                        alt=""
                      ></Image>
                    </motion.div>
                  </Box>
                </Box>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
}
