import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imageData from  "./image";
import './UncrowdedTrails.css';
import { requirePropFactory } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "20px",
    margin: "10px"
  },
});

export default function ImgMediaCard( props) {
  const classes = useStyles();
const [expand, setExpand] = useState(false);

   function handleExpand (){
       if (expand === true) {
            setExpand(false);
        } else {
        setExpand(true);
        }
   }

  
const imagePath = imageData.filter(obj => props.name.trim().toLowerCase() === obj.trail.trim().toLowerCase())[0];
  

  let image = require(`./images/${imagePath.image}`);
  return (
    <Card className={classes.root}>
      <CardActionArea>
         <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= { image.default } 
         />  
         
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">  
          <a  className =' listname' href='#' onClick={handleExpand}> 
            {props.name}
          </a> 
          </Typography> 
          
           { expand&&(
               <>
                <Typography variant="body2" color="textSecondary" component="p">
                    Association: {props.association}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Motorization: {props.motorization}
                </Typography>
                {props.difficulty && 
                    <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty: {props.difficulty}
                    </Typography>
                }
                </>
          
           )
           }
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}