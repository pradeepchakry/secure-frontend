import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from 'react-simple-checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { withStyles } from "@material-ui/core/styles";
import {BrowserRouter, Route} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://material-ui.com/">
        SVUDDE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const routeChange = () => { 
  // let path = `/home`; 
  //eslint-disable-next-line no-restricted-globals
  history.push("/home");
}

class ApplicationForm extends React.Component {
  

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  state = {
    courseApplied: "",
    studyCenterOptedCode: "",
    name: "",
    fatherName: "",
    aadharNo: "",
    doorNo: "",
    street: "",
    village: "",
    mandal: "",
    district: "",
    pincode: "",
    email: "",
    gender: "",
    medium: "",
    secondLanguageOpted: "",
    dob: new Date("1978-04-02T21:11:54"),
    maritalStatus: "",
    nationality: "",
    religion: "",
    caste: "",
    residential: "",
    phCategory: "",
    qualifyingExamination: "",
    university: "",
    yearAndMonthPasssing: new Date("1978-04-02T21:11:54"),
    groupSubject: "",
    maxMarks: "",
    marksObtained: "",
    percentageOfMarks: "",
    feeAmount: "",
    challanId: "",
    challanDate: new Date("2021-01-01T21:11:54"),
    bankName: "",
    declarationChecked: ""
  }

  logoutHandler =(e) => {
    this.props.history.push('/login')
  }

  handleCouseApplied = (courseApplied) => {
    this.setState({
      courseApplied: courseApplied
    })
  }

  handleStudyCenterOptedCode = (codeOpted) => {
    this.setState({
      studyCenterOptedCode: codeOpted
    })
  }

  handleNameChange = (name) => {
    this.setState({
      name: name
    })
  }

  handleFatherName = (fatherName) => {
    this.setState({
      fatherName: fatherName
    })
  }

  handleAadharNo = (aadharNo) => {
    this.setState({
      aadharNo: aadharNo
    })
  }

  handleDoorNo = (doorNo) => {
    this.setState({
      doorNo: doorNo
    })
  }

  handleStreet = (street) => {
    this.setState({
      street: street
    })
  }

  handleVillage = (village) => {
    this.setState({
      village: village
    })
  }

  handleMandal = (mandal) => {
    this.setState({
      mandal: mandal
    })
  }

  handleDistrict = (district) => {
    this.setState({
      district: district
    })
  }

  handlePincode = (pincode) => {
    this.setState({
      pincode: pincode
    })
  }

  handleEmail = (email) => {
    this.setState({
      email: email
    })
  }

  handleGenderChange = (gender) => {
    this.setState({
      gender: gender
    })
  }

  handleMedium = (medium) => {
    this.setState({
      medium: medium
    })
  }

  handleSecondLanguageOpted = (secondLanguageOpted) => {
    this.setState({
      secondLanguageOpted: secondLanguageOpted
    })
  }

  handleDOB = (dob) => {
    this.setState({
      dob: dob
    })
  }

  handleMaritalStatus = (maritalStatus) => {
    this.setState({
      maritalStatus: maritalStatus
    })
  }

  handleNationality = (nationality) => {
    this.setState({
      nationality: nationality
    })
  }

  handleReligion = (religion) => {
    this.setState({
      religion: religion
    })
  }

  handleCaste = (caste) => {
    this.setState({
      caste: caste
    })
  }

  handleResidential = (residential) => {
    this.setState({
      residential: residential
    })
  }

  handlePhCategory = (phCategory) => {
    this.setState({
      phCategory: phCategory
    })
  }

  handleQualifyingExam = (qualifyingExamination) => {
    this.setState({
      qualifyingExamination: qualifyingExamination
    })
  }

  handleUniversity = (university) => {
    this.setState({
      university: university
    })
  }

  handleYearAndMonth= (yearAndMonthPassing) => {
    this.setState({
      yearAndMonthPassing: yearAndMonthPassing
    })
  }

  handleGroupSubject = (groupSubject) => {
    this.setState({
      groupSubject: groupSubject
    })
  }

  handleMaxMarks = (maxMarks) => {
    this.setState({
      maxMarks: maxMarks
    })
  }

  handleMarksObtained = (marksObtained) => {
    this.setState({
      marksObtained: marksObtained
    })
  }

  handlePercentageOfMarks = (percentageOfMarks) => {
    this.setState({
      percentageOfMarks: percentageOfMarks
    })
  }

  handleFeeAmount = (feeAmount) => {
    this.setState({
      feeAmount: feeAmount
    })
  }

  handleChallanId = (chllanId) => {
    this.setState({
      chllanId: chllanId
    })
  }

  handleChallanDate = (challanDate) => {
    this.setState({
      challanDate: challanDate
    })
  }

  handleBankName = (bankName) => {
    this.setState({
      bankName: bankName
    })
  }

  handleDeclarationChecked = (declarationChecked) => {
    this.setState({
      declarationChecked: declarationChecked
    })
  }


  saveApplication = (toInput) => {
    const response = fetch("/svudde/saveForm", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    }).then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("SUCCESS")
        // console.log("Status: OK in Home -> Response: " + JSON.stringify(response.json()));
        // let responseText = document.createElement(response.json());
        // document.body.appendChild(responseText);
      }
    })
    .catch(e => {
      console.log('There has been a problem with the fetch operation: ' + e.message)
    })
  }

  handleFormSubmit = (variables) => {
    variables.preventDefault();
    console.log("Declaration checked" + this.state.declarationChecked)
    const toInput = this.state.gender;
    this.saveApplication(toInput);
  };

  // if (firstLoad) {
  //   // sampleFunc();
  //   setLoad(false);
  // }

  render() {
    const { classes } = this.props;
  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <BrowserRouter>
                <div>
                    {/* <header>
                        <Link to='/contact'>Contact</Link>
                    </header>
                    <div>
                        <Route path='/contact' Component={Contact}></Route>
                    </div> */}
                    {/* <a href="#" onClick={e=>this.logoutHandler(e)}>Logout</a> */}
                </div>
    </BrowserRouter>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Admission Application Form
        </Typography>
         <form className={classes.form} noValidate>
        <p>Course and Subject Applied</p>
        <select defaultValue={""} 
            onChange={this.handleCouseApplied} 
        >
          <option value="Couse1">Course1</option>
          <option value="Course2">Course2</option>
          <option value="Course3">Course3</option>
        </select>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="studyCenterId"
            label="Study Center opted with Code No."
            name="studyCenterId"
            defaultValue="001"
            onChange={this.handleStudyCenterOptedCode}
            autoFocus
          />
        <p>(Only required for applicants from study centers)</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name of the Applicant (as per lower degree )"
            name="name"
            autoComplete="name"
            onChange={this.handleNameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fatherName"
            label="Father's Name"
            name="fatherName"
            autoComplete="fatherName"
            onChange={this.handleFatherName}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="aadharNo"
            label="AADHAR No."
            name="aadharNo"
            autoComplete=""
            onChange={this.handleAadharNo}
            
          />
          <p>-- Address for Communication --</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="doorNo"
            label="Door No."
            name="Door No."
            autoComplete="doorNo"
            onChange={this.handleDoorNo}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="street"
            label="Street"
            name="Street"
            autoComplete="street"
            onChange={this.handleStreet}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="village"
            label="Village/Post"
            name="village"
            autoComplete="village"
            onChange={this.handleVillage}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mandal"
            label="Mandal/Town"
            name="mandal"
            autoComplete="mandal"
            onChange={this.handleMandal}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="district"
            label="District"
            name="district"
            autoComplete="mandal"
            onChange={this.handleDistrict}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pincode"
            label="Pincode"
            name="pincode"
            autoComplete="pincode"
            onChange={this.handlePincode}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={this.handleEmail}
            
          />
          <p>Gender</p>
          <select defaultValue={""} 
              onChange={this.handleGenderChange} 
          >
            <option value="M">M</option>
            <option value="F">F</option>
          </select> 

          <p>Medium</p>
          <select defaultValue={""} 
              onChange={this.handleMedium} 
          >
            <option value="English">English</option>
            <option value="Telugu">Telugu</option>
          </select>       
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="secondLanguage"
            label="(a) Second Language Opted under Part-I B:"
            name="secondLanguage"
            autoComplete="secondLanguage"
            onChange={this.handleSecondLanguageOpted}
            
          />
          <p>(B.Sc- English Medium only)</p>
          <p>(Only for B.A/B.Com/B.Sc)</p>
          <br></br>
          
          <Grid item xs={12}>
                        <TextField
                            id="date"
                            label="Date of birth"
                            name="Date of Birth"
                            type="date"
                            defaultValue="1978-04-02"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={this.handleDOB}
                        />
                    </Grid>
          <br></br>
          <p>Marital Status</p>
          <select defaultValue={""} 
              onChange={this.handleMaritalStatus} 
          >
            <option value="Single">Unmarried</option>
            <option value="Married">Married</option>
          </select>  
          <br></br>
          <p>Nationality</p>
          <input className="e-input" type="text" placeholder="Indian" value="Indian" readOnly= {true}/>
          <br></br>
          <p>Religion</p>
          <select defaultValue={""} 
              onChange={this.handleReligion} 
          >
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Others">Others</option>
          </select>
          <br></br>
          <p>Caste</p>
          <select defaultValue={""} 
              onChange={this.handleCaste} 
          >
            <option value="OC">OC</option>
            <option value="BC">BC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="Others">Others</option>
          </select>

          <br></br>
          <p>Residential Status</p>
          <select defaultValue={""} 
              onChange={this.handleResidential} 
          >
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
            <option value="Tribal">Tribal</option>
          </select>
          
          <p>Whether belongs to PH Category?</p>
          <select defaultValue={"No"} 
              onChange={this.handlePhCategory} 
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <br></br>
          <p>-- Particulars of the Qualifying Examinations passed --</p>
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="qualifyingExamination"
            label="Qualifying Examination"
            name="qualifyingExamination"
            autoComplete="qualifyingExamination"
            onChange={this.handleQualifyingExam}
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="university"
            label="University"
            name="university"
            autoComplete="university"
            onChange={this.handleUniversity}
            
          />

          <Grid item xs={12}>
                        <TextField
                            id="yearAndMonth"
                            label="Year and Month"
                            name="yearAndMonth"
                            type="date"
                            defaultValue="1998-04-02"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={this.handleYearAndMonth}
                        />
                    </Grid>
          <br></br>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="groupSubject"
            label="Group or Subject"
            name="groupSubject"
            autoComplete="groupSubject"
            onChange={this.handleGroupSubject}
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="maxMarks"
            label="Maximum Marks"
            name="maxMarks"
            autoComplete="maxMarks"
            onChange={this.handleMaxMarks}
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="marksObtained"
            label="Marks Obtained"
            name="marksObtained"
            autoComplete="marksObtained"
            onChange={this.handleMarksObtained}
            
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="percentageOfMarks"
            label="Percentage of Marks"
            name="percentageOfMarks"
            autoComplete="percentageOfMarks"
            onChange={this.handlePercentageOfMarks}
            
          />

          <p>-- Fee Particulars --</p>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="feeAmount"
            label="Fee Amount"
            name="feeAmount"
            autoComplete="feeAmount"
            onChange={this.handleFeeAmount}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="challanId"
            label="Paid Challan Id"
            name="challanId"
            autoComplete="challanId"
            onChange={this.handleChallanId}
            
          />
          <Grid item xs={12}>
                        <p>Challan Payment Date</p>
                        <TextField
                            id="challanPaymentDate"
                            name="challanPaymentDate"
                            type="date"
                            defaultValue="2021-01-01"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={this.handleChallanDate}
                        />
                    </Grid>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bankName"
            label="Bank Name"
            name="bankName"
            autoComplete="bankName"
            onChange={this.handleBankName}
          />

           <Checkbox
            name="declaration"
            label="declaration"
            checked={this.state.declarationChecked}
            onChange={this.handleDeclarationChecked}
          /> 
          <p>I hereby declare that the particulars given above are correct. In case if they are found to be incorrect
            at a later date, I submit myself for any action including removal from the rolls and such other disciplinary
            action under the ACT, the Statues and Ordinances rule of the University, I also agree to abide by the
            conditions, rules and regulations stipulated by the Directorate of distance Education and the Laws of the
            university applicable from time to time.</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleFormSubmit}
          >
            Save
          </Button>
        </form> 

        
      </div>
      {/* <div className="responseData">
        {this.setSaveResponse}
      
      </div> */}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
                          }
}

export default withStyles(useStyles, { withTheme: true })(ApplicationForm);

