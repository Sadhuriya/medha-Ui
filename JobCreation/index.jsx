import styled from "styled-components";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

import {
  PoppinsNormalGraniteGray18px,
  PoppinsNormalWhite14px,
  PoppinsNormalScarlet14px,
  PoppinsBoldShark18px,
  PoppinsBoldWhite18px,
  PoppinsNormalStarDust16px,
  PoppinsNormalWhite10px,
  PoppinsBoldBlack18px,
  PoppinsNormalCaribbeanGreen14px,
} from "../../assets/css/styledMixins";
import "./JobCreation.css";
import AuthenticatedMenuBar from "../AuthenticatedMenuBar/AuthenticatedMenuBar";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function JobCreation(props) {
  const {
    jobsCreation,
    jobPosts,
    overlapGroup4,
    line105,
    line106,
    line107,
    menu,
    Organization,
  } = props;

  const myOptions = [
    { title: "Gourav", age: 20 },
    { title: "Dinesh", age: 25 },
    { title: "Madhuri", age: 18 },
    { title: "Kartik", age: 21 },
    { title: "Gaurank", age: 5 },
  ];

  // Our sample dropdown options
  const options = myOptions.map((option) => {
    const initialLetter = option.title[0].toUpperCase();
    return {
      initialLetter: /[0-9]/.test(initialLetter) ? "0-9" : initialLetter,
      ...option,
    };
  });
  const history = useHistory();
  const [desc, setDesc] = useState("");
  const [internalnotes, setInternalNotes] = useState("");

  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");
  const [Location, setLocation] = useState("");
  const [Experience, setexperience] = useState("");
  const [department, setdepartment] = useState("");
  const [organization, setorganization] = useState("");
  const [employementtype, setemploymenttype] = useState("");
  const [Salary, setsalary] = useState("");
  const [showjobcreation, setshowjobcreation] = useState(true);

  const [selectedValue, setSelectedValue] = useState("a");
  const [errrormessage, setErrorMessage] = useState("");
  const classes = useStyles();

  function togglejobcreation(event) {
    console.log("toggledesc");
    event.preventDefault();
    setshowjobcreation(true);
  }

  function handleDesc(event) {
    setDesc(event.target.value);
  }

  function handlesalary(event) {
    setsalary(event.target.value);
  }
  function handleexperience(event) {
    setexperience(event.target.value);
  }
  function handlelocation(event) {
    setLocation(event.target.value);
  }

  function handleJobTitle(event) {
    setTitle(event.target.value);
  }
  function handleEmployementType(event) {
    setemploymenttype(event.target.value);
  }

  function handleDepartment(event) {
    setdepartment(event.target.value);
  }

  function handleorganization(event) {
    setorganization(event.target.value);
  }
  function handleDesc(event) {
    setDesc(event.target.value);
  }
  function handleInternalNotes(event) {
    setInternalNotes(event.target.value);
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setAge(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobTitle: title,
        location: Location,
        experience: Experience,
        salary: Salary,
        department: department,
        organization: organization,
        employmentType: employementtype,
        description: desc,
        internalNotes: internalnotes,
      }),
    };

    fetch("https://ats.medha.hr/jobpost", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        console.log(data);

        // check for error response
        if (!response.ok) {
          console.log("error");
        } else {
          history.push("/job-post");
        }
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  }

  return (
    <div className="container-center-horizontal">
      <div className="web-1920-13 screen">
        <AuthenticatedMenuBar menu="job-creation" />
        {/* <TitleMenuBar /> */}
        <form>
          <OverlapGroup>
            <Rectangle65></Rectangle65>

            <Rectangle66>
              <JobPosts>{jobPosts}</JobPosts>
            </Rectangle66>
            {/* LEFT NAVIGATION STARTS  */}

            {/* LEFT NAVIGATION ENDS  */}

            <Component571>
              <JobsCreation onClick={togglejobcreation}>
                {jobsCreation}
              </JobsCreation>
              <div>
                {showjobcreation ? (
                  <span>
                    <OverlapGroup4
                      id="jobline"
                      style={{ backgroundImage: `url(${overlapGroup4})` }}
                    >
                      <Line105 src={line105} />
                      <Line105 src={line106} />
                      <Line105 src={line107} />
                    </OverlapGroup4>
                    <br></br>
                    <br></br>
                    <Text8>JobTiltle</Text8>
                    <TextField
                      id="outlined-basic"
                      style={{ width: "500px", height: "50px" }}
                      variant="outlined"
                    />

                    {/* <div>
          <Text8>JobTiltle</Text8>
          <input type="text"          
          name = "Job Title"
          label="Job Title"
          placeholder=""
          onChange={handleJobTitle}
          style={{width: "500px",height:"50px",fontSize:"15px"}}
          value={title}/>
          </div> */}
                    <br></br>
                    <br></br>

                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                    {/* <Text5>EmployementType</Text5>
          
       <select onChange={handleEmployementType}value={employementtype}style={{width:"500px",height:"50px",fontSize:"15px"}}>
           
           <option defaultValue="Select"> Select</option>
           <option value="PartTime">PartTime</option>
           <option value="FullTime">FullTime</option>
           
           <option value="Internship">Internship</option>
           
          </select> 
          
           */}
                    <br></br>
                    <br />
                    <Text9>Organization</Text9>
                    <TextField
                      id="outlined-basic"
                      style={{ width: "500px", height: "50px" }}
                      variant="outlined"
                    />
                    {/* <div>
               <Text9>Organization</Text9>
             <input type="text"          
          name = "Organization"
          label="Organization"
          placeholder=""
          onChange={handleorganization}
          style={{width: "500px",height:"50px",fontSize:"15px"}}
          value={Organization}/>
          </div>
         */}
                    <br></br>
                    <br />

                    <Text10>Location</Text10>
                    <TextField
                      id="outlined-basic"
                      style={{ width: "500px", height: "50px" }}
                      variant="outlined"
                    />
                    {/* <div>
               <Text10>Location</Text10>
             <input type="text"          
          name = "Location"
          label="Location"
          placeholder=""
          onChange={handlelocation}
          style={{width: "500px",height:"50px",fontSize:"15px"}}
          value={Location}/>
          </div> */}
                    <br />
                    <br />
                    <Text6>Experience</Text6>
                    <TextField
                      id="outlined-basic"
                      style={{ width: "500px", height: "50px" }}
                      variant="outlined"
                    />
                    {/* <div>
           <Text6>Experience</Text6>
           <input type="text"          
          name = "Experience"
          label="Experience"
          placeholder=""
          onChange={handleexperience}
          style={{width: "500px",height:"50px",fontSize:"15px"}}
          value={Experience}/>
          </div> */}
                    <br></br>
                    <br />
                    <Text7>Salary</Text7>
                    <TextField
                      id="outlined-basic"
                      style={{ width: "500px", height: "50px" }}
                      variant="outlined"
                    />
                    {/* <div>
          <Text7>Salary</Text7>
          <input type="text"          
          name = "Salary"
          label="Salary"
          placeholder=""
          onChange={handlesalary}
          style={{width: "500px",height:"50px",fontSize:"15px"}}
          value={Salary}/>
          </div> */}
                    <br></br>
                    <br />
                    <Text11>Department</Text11>
                    <TextField
                      id="outlined-basic"
                      style={{ width: "500px", height: "50px" }}
                      variant="outlined"
                    />

                    {/* <div>
          <Text11>Department</Text11>
          <input type="text"          
          name = "Department"
          label="Department"
          placeholder=""
          onChange={handleDepartment}
          style={{width: "500px",height:"50px",fontSize:"15px"}}
          value={department}/>
          </div> */}
                    <div>
                      <Text12>JobDescription</Text12>
                      <Desc
                        type="text"
                        label="Job Description"
                        placeholder=""
                        onChange={handleDesc}
                        style={{
                          width: "500px",
                          height: "150px",
                          fontSize: "15px",
                          color: "black",
                          top: "540px",
                        }}
                        value={desc}
                      />
                    </div>
                    <br />

                    <Text13>InternalNotes</Text13>
                    <TextField
                      id="outlined-basic"
                      style={{
                        width: "500px",
                        height: "50px",
                        marginTop: "170px",
                      }}
                      variant="outlined"
                    />

                    {/* <div>
            <Text13>InternalNotes</Text13>
            <InternalNotes type="text" label="Internalnotes"
            placeholder=""
            onChange={handleInternalNotes}
            style={{width: "500px" ,height:"50px",fontSize:"15px",color:"black",top:"730px"}}
            value={internalnotes} />
            </div>          */}
                  </span>
                ) : null}
              </div>

              <div>
                <Text15>Status</Text15>
                <Text16>Publish</Text16>
                <Radio
                  checked={selectedValue === "publish"}
                  onChange={handleChange}
                  value="publish"
                  name="radio-button-demo"
                  label="publish"
                  inputProps={{ "aria-label": "publish" }}
                  style={{ top: "40px" }}
                />

                <Text17>Draft</Text17>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "B" }}
                  style={{ top: "40px", right: "-100px" }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: "150px",
                  height: "50px",
                  color: "white",
                  marginLeft: "85px",
                  marginTop: "60px",
                  backgroundColor: "var(--caribbean-green)",
                  fontWeight: "bold",
                }}
              >
                Submit
              </button>
              <button
                style={{
                  width: "150px",
                  height: "50px",
                  color: "white",
                  marginLeft: "280px",
                  marginTop: "-50px",
                  backgroundColor: "var(--caribbean-green)",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
            </Component571>
          </OverlapGroup>
        </form>
      </div>
    </div>
  );
}
const JobPosts = styled.div`
  ${PoppinsBoldShark18px}
  min-height: 27px;
  margin-top: 30px;
  min-width: 100px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
  margin-left: 10px;
  color: var(--caribbean-green);
`;

const Desc = styled.input`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  width: 345%;
  height: 24%;
  top: 618px;
  left: 0px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;
const InternalNotes = styled.input`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  width: 345%;
    height: 10%;
    top: 781px;
    left: 0px
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const UpgradeNow = styled.div`
  ${PoppinsNormalWhite14px}
  width: 102px;
  min-height: 22px;
  margin-top: -3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 1920px;
  height: 2090px;
  position: relative;
  margin-top: -7px;
`;

const Rectangle65 = styled.div`
  position: absolute;
  width: 1500px;
  height: 1000px;
  top: 122px;
  left: 250px;
  background-color: var(--white);
  border-radius: 14px;
`;
const Rectangle66 = styled.div`
  position: absolute;
  width: 1500px;
  height: 94px;
  top: 12px;
  left: 250px;
  background-color: var(--white);
  border-radius: 14px;
`;

const Text5 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 150px;
  left: -160px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;
const Text6 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 360px;
  left: -110px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;
const Text7 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 420px;
  left: -90px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;
const Text8 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 80px;
  left: -80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;
const Text9 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 220px;
  left: -120px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text10 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 290px;
  left: -100px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text11 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 490px;
  left: -100px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text12 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 600px;
  left: -130px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text13 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 720px;
  left: -130px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text15 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 803px;
  left: -80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text16 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 805px;
  left: 50px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text17 = styled.div`
  ${PoppinsNormalStarDust16px}
  position: absolute;
  top: 805px;
  left: 190px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Component571 = styled.div`
  position: absolute;
  width: 145px;
  top: 184px;
  left: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 32px;
`;

const JobsCreation = styled.div`
  ${PoppinsBoldBlack18px}
  min-height: 27px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 142px;
  height: 3px;
  position: relative;
  margin-top: 3px;
  margin-left: 1.5px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Line105 = styled.img`
  position: absolute;
  width: 142px;
  height: 3px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export default JobCreation;
