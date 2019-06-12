import React, { Component } from 'react'; 
import '../components/individual.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"

  export default function OrganisationPage() {
    const positions = [
        {
          label: 'Principal Speech Pathologist',
          value: 'Position1',
        },
        {
          label: 'Senior Speech Pathologist',
          value: 'Position2',
        },
        {
          label: 'Speech Pathologist',
          value: 'Position3',
        },
  
      ];
    const useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
        },
        dense: {
          marginTop: theme.spacing(2),
        },
        menu: {
          width: 200,
        },
        button: {
            margin: theme.spacing(1),
          },
          input: {
            display: 'none',
          },
        
        
      }));
        const classes = useStyles();
        const [values, setValues] = React.useState({
            firstName: 'Enter your first name',
            lastName: 'Enter your last name',
            email: 'Enter your email address',
            medicareNumber:'Enter your Medicare Provider Number',
            position:'Principal Speech Pathologist'


            
          });
          const handleChange = name => event => {
            setValues({ ...values, [name]: event.target.value });
          };
        
        return ( 
            <div class="row" style={{marginTop:50}}>
  <div class="column" style={{textAlign:'center', borderRight:'0.5px solid',width:'30%'}}>
  <h1>Sign Up</h1>
  <h2>Individual</h2>
  </div>
 
  <div class="column" style={{marginLeft:30}}>
  <h2>Your Information</h2>
  <form className={classes.container} noValidate autoComplete="off">
  <TextField
        id="outlined-name"
        label="First Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('firstName')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Last Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('LastName')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        placeholder="Number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="position"
        select
        label="Select Your Position"
        className={classes.textField}
        value={values.position}
        onChange={handleChange('position')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your position"
        margin="normal"
        variant="outlined"
      >
        {positions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Link to = {`/type`}>
      <Button style= {{marginTop:'25%',marginLeft:'25%'}} variant="contained" color="primary" className={classes.button} >
        Complete
      </Button>
      </Link>
</form>
  </div>
  
</div>
         );
    }

 
