import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes(props) {
  const classes = useStyles();

  return (
    <div>
      
      <div>
        
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          {props.text}
        </Button>
      </div>
   
    
    
    </div>
  );
}