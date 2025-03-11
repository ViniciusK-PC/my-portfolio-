import { Button, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from "../../../../assets/images/avatar.jpeg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",

  }));

  const StyledImg = styled("img")(() => ({
    whidth: "30%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">Vinicius Kohls Buttow</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'm a software Engineer</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                <DownloadIcon />
                Download Cv
              </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                <MailOutlineIcon/>
                Contact me
              </Button>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
