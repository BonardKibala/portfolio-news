import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FadeMenu from "../../components/fadeMenu";

const ProjectCard = ({ title, image, createdAt, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[400] }} aria-label="recipe">
            BK
          </Avatar>
        }
        action={
          <FadeMenu/>
        }
        title={<h4>{title}</h4>}
        subheader={createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="kinshasa digital"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href="#" underline="none"> <Button variant="outlined">Voir</Button></Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color:"indigo",}} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
