import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Copyright, Footers, Social } from "./footerElements.jsx";
import FormDialog from "./formDialog";
import Link from "@mui/material/Link";
import {FaFacebookSquare,FaWhatsapp,FaLinkedinIn,FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      maxWidth: 500,
    },
    icon: {
      margin: 5,
      "&:hover": {
        color: "#1a6309",
        cursor: "pointer",
      },
    },
    link: {
      "&:hover": {
        color: "red !important",
        cursor: "pointer",
      },
    },
    blue: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "red",
      width: 8,
      height: 25,
    },
    blueTitle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
    },
  });
  const classes = useStyles();

  return (
    <Footers id="contact">
      <Grid container>
        {/* <Grid item xs={12} sm={3}>
          <div className={classes.root}>
            <div className={classes.blueTitle}>
              <div className={classes.blue}></div>
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                style={{ marginLeft: 8 }}
              >
                Moi
              </Typography>
            </div>
            <Typography component="p" gutterBottom>
              Je suis développeur FullStack, certifié à la Kinshasa Digital
              academy et à l'Unikin en Math.Info comme Ir SoftWare.
            </Typography>
            <div>
              <Link href="">
                <FacebookIcon className={classes.icon} />
              </Link>
              <Link href="">
                <TwitterIcon className={classes.icon} />
              </Link>
              <Link href="/">
                <LinkedInIcon className={classes.icon} />
              </Link>
              <Link href="">
                <InstagramIcon className={classes.icon} />
              </Link>
              <Link href="">
                <YouTubeIcon className={classes.icon} />
              </Link>
            </div>
          </div>
        </Grid> */}
        <Grid item xs={12} sm={4}>
          <div className={classes.root}>
            <div className={classes.blueTitle}>
              <div className={classes.blue}></div>
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                style={{ marginLeft: 8 }}
              >
                Compétences
              </Typography>
            </div>

            <Typography component="p" gutterBottom>
              1. UI et UX Design
            </Typography>
            <Typography component="p" gutterBottom>
              2. Développement Web et Web Mobile
            </Typography>
            <Typography component="p" gutterBottom>
              3. Développement Mobile
            </Typography>
            <Typography component="p" gutterBottom>
              4. Développement Desktop
            </Typography>
            <Typography component="p" gutterBottom>
              5. Outils de gestion de projet (<strong style={{color:"blue"}}>Scrum</strong>)
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.root}>
            <div className={classes.blueTitle}>
              <div className={classes.blue}></div>
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                style={{ marginLeft: 8 }}
              >
                Contacts
              </Typography>
            </div>

            <Typography component="address" gutterBottom>
              KDA, Ngaliema - Kinshasa
            </Typography>
            <Typography component="address" gutterBottom>
            <Link href="tel:+243819097177" style={{color:"white"}} underline="none">Tel : +243 81 909 71 77</Link>   <br></br> 
            <Link href="mail:kibalabonard1@gmail.com" style={{color:"white"}} underline="none">Mail : kibalabonard1@gmail.com</Link>
            </Typography>
            <Social>
              <Link href='https://web.facebook.com/bonard.kibala' style={{marginRight:'10px'}}><FaFacebookSquare style={{color:'white', fontSize:'1.7rem',}}/></Link>
              <Link href='tel:+243819097177' style={{marginRight:'10px'}}><FaWhatsapp style={{color:'green', fontSize:'1.7rem',}}/></Link>
              <Link href='https://www.linkedin.com/in/bonard-kibala-422a761ba/' style={{marginRight:'10px'}}><FaLinkedinIn style={{color:'white', fontSize:'1.7rem',}}/></Link>
              <Link href='https://github.com/BonardKibala' style={{marginRight:'10px'}}><FaGithubSquare style={{color:'white', fontSize:'1.7rem'}}/></Link>
            </Social>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.root}>
            <div className={classes.blueTitle}>
              <div className={classes.blue}></div>
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                style={{ marginLeft: 8 }}
              >
                Ecrivez-moi
              </Typography>
            </div>

            <Typography component="p" gutterBottom>
              Ecrivez-moi un message et faites part de vos préoccupations et besoins.
            </Typography>
            <FormDialog />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Copyright>
            <br></br>
            <br></br>
            <Typography component="p" gutterBottom>
              Copyright © <strong>Bonard Tech</strong>, Septembre 2021 <br></br>
              Site crée par: <strong>Bonard Kibala Ink</strong>
            </Typography>
          </Copyright>
        </Grid>
      </Grid>
    </Footers>
  );
};

export default Footer;
