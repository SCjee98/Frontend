import { useState } from "react";
import "../App.css";
// import DialogBox from "./components/DialogBox";
import FormInput from "../components/FormInput";
import DialogBox from "../components/FormInput";
import RadioInputs from "../components/RadioInputs";
import { addUser } from "../service/api"
// import { useNavigate } from 'react-router-dom';
const Patientform = () => {
  const [selectedContent, setSelectedContent] = useState("Open Box");
  const [images, setImages] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [values, setValues] = useState({
    patientId: "",
    fname: "",
    lname: "",
    email: "",
    birthday: "",
    gender: "",
    blood_group: "",
    religion: "",
    language: "",
    maritalstatus: "",
    occupation: "",
    vaccinestatus: "",
    hospitalname: "",
    doctorname: "",
    hospital_entry_date: "",
    hospital_exit_date: "",
    emmergency_entry_date: "",
    emmergency_exit_date: "",
  });

  const [imageinput, setimageinput] = useState([]);

  const inputs = [
    {
      id: 1,
      name: "patientId",
      type: "text",
      placeholder: "Patient's Id",
      errorMessage:
        "Patient's Id should be 3-16 characters and shouldn't include any special character!",
      label: "Patient's Id",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "fname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
    },
    {
      id: 3,
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      label: "Last name",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 6,
      name: "blood_group",
      type: "text",
      value: "blood",
      placeholder: "Blood Group",
      label: "Blood Group",
    },
    {
      id: 7,
      name: "religion",
      type: "text",
      value: "religion",
      placeholder: "Religion",
      label: "Religion",
    },
    {
      id: 8,
      name: "language",
      type: "text",
      value: "language",
      placeholder: "language",
      label: "Language",
    },
    {
      id: 9,
      name: "maritalstatus",
      type: "text",
      value: "maritalstatus",
      placeholder: "Married/Unmarried/Divorsed",
      label: "Marital Status",
    }, {
      id: 10,
      name: "occupation",
      type: "text",
      value: "occupation",
      placeholder: "occupation",
      label: "Occupation",
    }, {
      id: 11,
      name: "vaccinestatus",
      type: "text",
      value: "vaccinestatus",
      placeholder: "",
      label: "Vaccine Status",
    }, {
      id: 12,
      name: "hospitalname",
      type: "text",
      value: "hospitalname",
      placeholder: "",
      label: "Hospital name",
    }, {
      id: 13,
      name: "doctorname",
      type: "text",
      value: "doctorname",
      placeholder: "",
      label: "Doctor Name",
    },
    {
      id: 14,
      name: "image",
      type: "file",
      value: "upload_image",
      placeholder: "Upload desired Image",
      label: "Upload Vaccine Certificate",
    },
    {
      id: 15,
      name: "image",
      type: "file",
      value: "upload_image",
      placeholder: "Upload desired Image",
      label: "Upload Lungs' XRAY",
    },
    {
      id: 16,
      name: "image",
      type: "file",
      value: "upload_image",
      placeholder: "Upload desired Image",
      label: "Upload Prescriptions",
    },
    {
      id: 17,
      name: "image",
      type: "file",
      value: "upload_image",
      placeholder: "Upload desired Image",
      label: "Upload Medical Bills",
    },
    {
      id: 18,
      name: "hospital_entry_date",
      type: "date",
      placeholder: "hospital_entry_date",
      label: "Hospital Entry Date",
    },
    {
      id: 19,
      name: "hospital_exit_date",
      type: "date",
      placeholder: "hospital_exit_date",
      label: "Hospital Exit Date",
    },
    {
      id: 20,
      name: "emmergency_entry_date",
      type: "date",
      placeholder: "emmergency_entry_date",
      label: "Emmergency Entry Date",
    },
    {
      id: 20,
      name: "emmergency_exit_date",
      type: "date",
      placeholder: "emmergency_entry_date",
      label: "Emmergency exit Date",
    },
    {
      id: 21,
      name: "image",
      type: "file",
      value: "upload_image",
      placeholder: "Upload desired Image",
      label: "Upload Covid Test Reports",
    },
    {
      id: 22,
      name: "image",
      type: "file",
      value: "upload_image",
      placeholder: "Upload desired Image",
      label: "Lab Test Reports",
    },


  ];

  const radioInputs = [
    {
      id: 1,
      name: "gender",
      type: "radio",
      value: "male",
      placeholder: "male",
      label: "Male",
    },
    {
      id: 2,
      name: "gender",
      type: "radio",
      value: "female",
      placeholder: "female",
      label: "Female",
    },
    {
      id: 3,
      name: "gender",
      type: "radio",
      value: "other",
      placeholder: "other",
      label: "Other",
    },
  ]

  const option = [
    {
      id: 1,
      name: "gender",
      type: "option",
      value: "gender",

      label: "gender",
    },
    {
      id: 2,
      name: "gender",
      type: "option",
      value: "gender",

      label: "gender",
    },
  ]


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {

    for (let i = 0; i < images.length; i++) {
      setimageinput(images[i])
    }

    console.log("Images are", imageinput)
    await addUser(values);
    //navigate('/all');
  }

  console.log("user data are: -", values)
  console.log("Images:", images);

  const handleSelect = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  function handleFiles() {
    //window.onload = () => {
    const array = [], pdf = [];
    console.log("Here")
    const files = document.getElementById("file-input").files;
    const container = document.getElementById("image-container");

    //console.log("Files, Container:", files[0].type, container);

    // for (let i = 0; i < files.length; i++) {
    //   if (files[i].type.includes('png')) {
    //     const file = files[i];
    //     const img = document.createElement("img");
    //     img.src = URL.createObjectURL(file);
    //     //container?.appendChild(img);
    //     array.push(img.src);
    //   }
    //   else {
    //     const file = files[i];
    //     const img = document.createElement("img");
    //     img.src = URL.createObjectURL(file);
    //     console.log("HERE:", img.src)
    //     //container?.appendChild(img);
    //     pdf.push(img.src);
    //   }
    // }
    setPdfs(pdf);
    setImages(array);
    //}
  }

  const button = document.getElementById("upload-button");
  button?.addEventListener("click", handleFiles);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Patients' Form</h1>
        <div className="form-div">
          {inputs.map((input) => (
            // eslint-disable-next-line react/jsx-no-undef
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="formInput">
            <label htmlFor="dropdown">Select an option:</label>
            <select id="dropdown" onChange={handleSelect}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {/* <p>You selected: {selectedValue}</p> */}
          </div>
          <input type="file" id="file-input" multiple />
          <div className="form-div">
            <button id="upload-button">Upload Images</button>
          </div>
                    <div className="formInput">
            <label htmlFor="dropdown">Vaccine Status:</label>
            <select id="dropdown" onChange={handleSelect}>
              <option value="male">Fully Vaccinated</option>
              <option value="female">Partially Vaccinated</option>
              <option value="other">Not Vaccinated at all</option>
            </select>
            {/* <p>You selected: {selectedValue}</p> */}
          </div>
        </div>

        <RadioInputs radioInputs={radioInputs} onChange={onChange} values={values} radioLabel={"Gender"} />
        <DialogBox selectedContent={selectedContent} onChange={(e) => setSelectedContent(e.target.value)} />
        <button onClick={() => addUserDetails()}>Submit</button>
      </form>
    </div>
  );
};

export default Patientform;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//     width: '100%',
//     maxWidth: 500,
//     borderRadius: 5,
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//   },
//   input: {
//     marginBottom: theme.spacing(2),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

// function Form() {
//   const classes = useStyles();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//   };

//   const initialValue = {
//     fname: "",
//     lname: "",
//     email: "",
//     dob: "",
//     Blood_group: "",
//     image: "",
//     gender: ""
//   }

//   const [user, setUser] = useState(initialValue);
//   const { fname, lname, email, dob, Blood_group, image, gender } = user;

//   // let navigate = useNavigate();

//   const onValueChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value })
//   }

//   const addUserDetails = async () => {
//     await addUser(user);
//     // navigate('/all');
//   }

//   console.log("data are:- ", user)

//   return (
//     <div className={classes.formContainer}>
//       <h1>Pateints Information</h1>
//       <form className={classes.form} onSubmit={handleSubmit}>
//         <TextField
//           label="First Name"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='fname' value={fname}
//         />
//         <TextField
//           label="Last Name"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='lname' value={lname}
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='email' value={email}
//         />
//         <TextField
//           label="DOB"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='dob' value={dob}
//         />
//         <TextField
//           label="Blood Group"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='name' value={Blood_group}
//         />
//         <TextField
//           label="Image"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='image' value={image}
//         />
//         <TextField
//           label="Gender"
//           variant="outlined"
//           className={classes.input}
//           onChange={(e) => onValueChange(e)} name='gender' value={gender}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className={classes.submitButton}
//           onClick={() => addUserDetails()}
//         >
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Form;
