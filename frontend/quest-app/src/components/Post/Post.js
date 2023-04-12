import React,{useState} from "react";
import "./Post.scss";
//import * as React {useState} from 'react';
import { makeStyles, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ExpandMore } from "@mui/icons-material";
//import { useState } from "react";

/*const useStyles=makeStyles((theme)=>({
  root:{
    maxWidth:345,
  },
  media:{
    height:0,
    panddingTop:'56.25%'
  },
  expand:{
    transform:'rotate(0deg)',
    marginLeft:'auto',
    transition:theme.transitions.create('transfor',{
      duration:theme.transitions.duration.shortest,
    }),
  },
  expandOpen:{
    transform:'rotate(180deg)',
  },
  avatar:{
    backgroundColor:red[500],
  },
}));*/

function Post(props) {
    const{title,text}=props;
    //const classes=useStyles();
    const [expanded,setExpanded]=useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        <div className="postContainer">
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
        </CardContent>
      </Collapse>
    </Card>
           
        </div>
    )
}

export default Post;