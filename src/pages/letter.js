import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import report from '../images/report.png'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import download from 'downloadjs'

const FileDownload = require('js-file-download');

    

const letter = (props) => {

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
      const gender = [
        {
          label: 'Female',
          value: 'Female',
        },
        {
          label: 'Male',
          value: 'Male',
        },

      ];
      const [values, setValues] = React.useState({
        doctorName: '',
        clinicName: '',
        clinicAddress: '',
        clientName:'',
        clientAddress:'',
        clientDOB:'',
        clinicianName:'',
        clinicianMedicare:'',
        clinicianPosition:'',
        clientGender:'',
        summary:'',


        
      });
        const classes = useStyles();
        const handleChange = name => event => {
            setValues({ ...values, [name]: event.target.value });
          };
          const YourButton = () => (
            <Button variant="contained" color="primary" className={classes.button} onClick={yourFunction}>Submit</Button>
          )
          
          function yourFunction(event) {
            const details = {
                doctorName:values.doctorName,
                clinicName: values.clinicName,
                clinicAddress: values.clinicAddress,
                clientName:values.clientName,
                clientDOB:values.clientDOB,
                clientAddress:values.clientAddress,
                clinicianName:values.clinicianName,
                clinicianMedicare:values.clinicianMedicare,
                clinicianPosition:values.clinicianPosition,
                clientGender:values.clientGender,
                summary:values.summary
    
              };
          
              axios.post(`https://mighty-castle-63456.herokuapp.com/submitletter`, { details })
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                })
                console.log("hello")
          }
          const GetPdf = () => (
            <Button variant="contained" color="primary" className={classes.button} onClick={yourNewFunction}>Get PDF</Button>
          )
          
          function yourNewFunction(event) {
              axios.get(`https://mighty-castle-63456.herokuapp.com/`,
              {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/pdf'
                }
            }
              )
              
                .then(res => {
                    const content = res.headers['content-type'];
                    download(res.data,"letter.pdf", content)
                })
          }
        
    return ( <div style={{marginTop:'5%'}}>
                   <h1 style={{marginLeft:'5%',marginRight:'2%',textAlign:'center'}}>Chronic Disease Management Letter Generator</h1> 

        <div class="row" style={{marginTop:50}}>
          <div class="column" style={{marginLeft:'5%',width:'40%'}}>
          <img src = {report} style={{borderRight:'0.5px solid'}}>
          </img>
          </div>
          <div class="column" style={{marginLeft:30}}>
          <h2>Fill up form below</h2>
          <h5>Referral Doctor Information</h5>
          <TextField
        id="outlined-name"
        label="Doctor Name"
        className={classes.textField}
        value={values.doctorName}
        onChange={handleChange('doctorName')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Clinic Name"
        className={classes.textField}
        value={values.clinicName}
        onChange={handleChange('clinicName')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Clinic Address"
        className={classes.textField}
        value={values.clinicAddress}
        onChange={handleChange('clinicAddress')}
        margin="normal"
        variant="outlined"
      />
                <h5 style={{paddingTop:'30px'}}>Client Information</h5>
                <TextField
        id="outlined-name"
        label="Client's Name"
        className={classes.textField}
        value={values.clientName}
        onChange={handleChange('clientName')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="date"
        label="Client's Date of Birth"
        type="date"
        defaultValue=""
        variant="outlined"
        margin="normal"
        onChange={handleChange('clientDOB')}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-name"
        label="Client's Address"
        className={classes.textField}
        value={values.clientAddress}
        onChange={handleChange('clientAddress')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="position"
        select
        label="Gender"
        className={classes.textField}
        value={values.clientGender}
        onChange={handleChange('clientGender')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your Gender"
        margin="normal"
        variant="outlined"
      >
      {gender.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

                <h5 style={{paddingTop:'30px'}}>Clinician Information</h5>
                <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.clinicianName}
        onChange={handleChange('clinicianName')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Medicare Number"
        className={classes.textField}
        value={values.clinicianMedicare}
        onChange={handleChange('clinicianMedicare')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Clinician Position"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Add a summary of session"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />


      <YourButton  style={{backgroundColor:'blue'}}></YourButton>
            <GetPdf></GetPdf>
            </div>

           
        </div>
        
        </div>
     );
}
 
export default letter;
