import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"

export default function Type(){
        const useStyles = makeStyles(theme => ({
            button: {
              margin: theme.spacing(1),
              width:'100%'
            },
            input: {
              display: 'none',
            },
          }));
        const classes = useStyles();
        return ( 
            <div style={{position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'}}>
                <h2> Choose the type of letter you would like </h2>
                <div>
                    <Link to ="/letter">
                <Button variant="outlined" color="primary" className={classes.button}>
        Chronic Disease Management Letter
      </Button> 
      </Link>
                </div>
                <div>
                <Button variant="outlined" color="primary" className={classes.button}>
        Other
      </Button>
                </div>
            </div>
         );
    }
