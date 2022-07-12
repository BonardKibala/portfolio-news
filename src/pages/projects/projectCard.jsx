import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FadeMenu from "../../components/fadeMenu";

const ProjectCard = ({ title, image, createdAt, description, lien }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[400] }} aria-label="recipe">
            BK
          </Avatar>
        }
        action={<FadeMenu lien={lien} />}
        title={<h4>{title}</h4>}
        subheader={createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="bonard kibala"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ textAlign: "justify" }}
        >
          <strong>{description}</strong>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={lien} underline="none">
          {" "}
          <Button variant="outlined">Voir</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
