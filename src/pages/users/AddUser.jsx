import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form, Input, Button, FormGroup, Label
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"; 
import { 
  addNewUser,
  fetchRegistrationDropdown
} from "../../store/User/actions";  
 
import EyeIcon from "mdi-react/EyeIcon"; 

function AddUser() {
  const dispatch = useDispatch();
  const dropdownOptions = useSelector((state) => state.Users.registrationDropdownValues);
  // const [genderData, setGender] = useState([]);
  // console.log("ITL", dropdownOptions.gender)
  useEffect(() => {
    dispatch(fetchRegistrationDropdown());
    // setGender(dropdownOptions.gender)
  }, []);
  const [showPassword, setShowPassword] = useState("password");
  const changePasswordState = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const AddUserSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    number: Yup.string().required("Phone Number is required"),
    birthdate: Yup.string().required("Birthday is required"),
    location: Yup.string().required("Location is required"),
    height: Yup.string().required("Height is required"),
    orientation: Yup.string().required("Sexual orientation is required"),
    gender: Yup.string().required("Gender is required"),
    relationship: Yup.string().required("Relationship status is required"),
    buildIs: Yup.string().required("Build is required"),
    ethnicity: Yup.string().required("Ethnicity is required"),
    // lookingFor: Yup.string().required("Looking to meet is required"), 
    // photo: Yup.string().required("Photo is required"), 
  });
  
  const addUserFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "", 
      number: "", 
      birthdate: "", 
      location: "", 
      height: "", 
      orientation: "", 
      gender: "", 
      relationship: "", 
      buildIs: "", 
      ethnicity: "", 
      // lookingFor: "",  
      // photo: "",  
    },
    validationSchema: AddUserSchema,
    onSubmit: async (values) => {
      console.log("values of add users form", values);
      await dispatch(
        addNewUser({
          username: values.username,
          email: values.email,
          password: values.password,
          number: values.number,
          birthdate: values.birthdate,
          location: values.location,
          height: values.height,
          orientation: values.orientation,
          gender: values.gender,
          relationship: values.relationship,
          buildIs: values.buildIs,
          ethnicity: values.ethnicity,
          // lookingFor: values.lookingFor, 
          // photo: values.photo, 
        })
      );
    },
  });
  // const numbers = dropdownOptions.gender;
  // console.log(numbers)
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title mb-3"
                onClick={() => {
                  console.log(
                    "this is my user list which i had to show",
                    // users.usersList
                  );
                }}
              >
                Add User
              </h4>
            </Col>
          </Row>
        </div>
        

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <> 
                  <Row className="justify-content-center mt-3">
                    <Col lg="12">
                    <Form className="form add_new_user login-form" onSubmit={addUserFormik.handleSubmit}>
                      <Row>
                        <Col lg="3">
                          <div className="form__form-group">
                            <span className="form__form-group-label">Pick a unique username</span>
                            <div className="form__form-group-field"> 
                              <Input
                                className="input-without-border-radius"
                                name="username"
                                label="Username"
                                value={addUserFormik.values.username}
                                onChange={addUserFormik.handleChange}
                                placeholder="Enter Username"
                                type="text"
                              />
                            </div>
                            {addUserFormik.touched.username && addUserFormik.errors.username ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.username}
                              </div>
                            ) : null}
                          </div>
                        </Col> 
                        <Col lg="3">
                          <div className="form__form-group">
                            <span className="form__form-group-label">What is your email address? </span>
                            <div className="form__form-group-field"> 
                              <Input
                                className="input-without-border-radius"
                                name="email"
                                label="Email"
                                value={addUserFormik.values.email}
                                onChange={addUserFormik.handleChange}
                                placeholder="Enter Email"
                                type="text"
                              />
                            </div>
                            {addUserFormik.touched.email && addUserFormik.errors.email ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.email}
                              </div>
                            ) : null}
                          </div>
                        </Col> 
                        <Col lg="3">
                          <div className="form__form-group">
                            <span className="form__form-group-label">Pick a strong password</span>
                            <div className="form__form-group-field"> 
                              <Input
                                className="input-without-border-radius"
                                name="password"
                                label="Password"
                                value={addUserFormik.values.password}
                                onChange={addUserFormik.handleChange}
                                placeholder="Enter Password"
                                type={showPassword}
                              />

                              <button
                                type="button"
                                className={`form__form-group-button${
                                  showPassword == "text" ? " active" : ""
                                }`}
                                onClick={changePasswordState}
                              >
                                <EyeIcon />
                              </button>
                            </div>
                            {addUserFormik.touched.password && addUserFormik.errors.password ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.password}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        
                        <Col lg="3">
                          <div className="form__form-group">
                            <span className="form__form-group-label">What is your phone number?</span>
                            <div className="form__form-group-field"> 
                              <Input
                                className="input-without-border-radius"
                                name="number"
                                label="Phone Number"
                                value={addUserFormik.values.number}
                                onChange={addUserFormik.handleChange}
                                placeholder="Enter Number"
                                type="number"
                              />
                            </div>
                            {addUserFormik.touched.number && addUserFormik.errors.number ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.number}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="form__form-group">
                            <span className="form__form-group-label">When is your birthday?</span>
                            <div className="form__form-group-field"> 
                              <Input
                                className="input-without-border-radius"
                                name="birthdate"
                                label="When is your birthday?"
                                value={addUserFormik.values.birthdate}
                                onChange={addUserFormik.handleChange}
                                placeholder="Enter Date"
                                type="date"
                              />
                            </div>
                            {addUserFormik.touched.birthdate && addUserFormik.errors.birthdate ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.birthdate}
                              </div>
                            ) : null}
                          </div>
                        </Col> 
                        <Col lg="3">
                          <div className="form__form-group">
                            <span className="form__form-group-label">Where are you located?</span>
                            <div className="form__form-group-field"> 
                              <Input
                                className="input-without-border-radius"
                                name="location"
                                label="Where are you located"
                                value={addUserFormik.values.location}
                                onChange={addUserFormik.handleChange}
                                placeholder="location"
                                type="text"
                              />
                            </div>
                            {addUserFormik.touched.location && addUserFormik.errors.location ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.location}
                              </div>
                            ) : null}
                          </div>
                        </Col> 
                        <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">How tall are you?</span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="height"  
                                value={addUserFormik.values.height}
                                onChange={addUserFormik.handleChange}
                              > 
                                <option value="average">Average</option>
                                <option value="short">Short</option>
                                <option value="funSized">Fun sized</option>
                                <option value="tall">Tall</option> 
                              </select>
                            </div>
                            {addUserFormik.touched.height && addUserFormik.errors.height ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.height}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">What is your sexual orientation?</span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="orientation"  
                                value={addUserFormik.values.orientation}
                                onChange={addUserFormik.handleChange}
                              >
                                { 
                                  dropdownOptions.orientation && dropdownOptions.orientation.map((item, i) => {  
                                    return(
                                       <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    ) 
                                  })
                                } 
                              </select>
                            </div>
                            {addUserFormik.touched.orientation && addUserFormik.errors.orientation ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.orientation}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">What is your gender?</span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="gender"  
                                value={addUserFormik.values.gender}
                                onChange={addUserFormik.handleChange}
                              >
                                { 
                                  dropdownOptions.gender && dropdownOptions.gender.map((item, i) => { 
                                    return(
                                       <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    ) 
                                  })
                                } 
                              </select>
                            </div>
                            {addUserFormik.touched.gender && addUserFormik.errors.gender ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.gender}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">What is your relationship status?</span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="relationship"  
                                value={addUserFormik.values.relationship}
                                onChange={addUserFormik.handleChange}
                              >
                                { 
                                  dropdownOptions.relationshipStatus && dropdownOptions.relationshipStatus.map((item, i) => { 
                                    return(
                                       <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    ) 
                                  })
                                } 
                              </select>
                            </div>
                            {addUserFormik.touched.relationship && addUserFormik.errors.relationship ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.relationship}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">What would you say your build is?</span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="buildIs"  
                                value={addUserFormik.values.buildIs}
                                onChange={addUserFormik.handleChange}
                              >
                                { 
                                  dropdownOptions.exercise && dropdownOptions.exercise.map((item, i) => { 
                                    return(
                                       <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    ) 
                                  })
                                } 
                              </select>
                            </div>
                            {addUserFormik.touched.buildIs && addUserFormik.errors.buildIs ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.buildIs}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">What is your ethnicity?</span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="ethnicity"  
                                value={addUserFormik.values.ethnicity}
                                onChange={addUserFormik.handleChange}
                              >
                                { 
                                  dropdownOptions.ethnicity && dropdownOptions.ethnicity.map((item, i) => { 
                                    return(
                                       <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    ) 
                                  })
                                } 
                              </select>
                            </div>
                            {addUserFormik.touched.ethnicity && addUserFormik.errors.ethnicity ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.ethnicity}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        {/* <Col lg="3"> 
                          <div className="form__form-group">
                            <span className="form__form-group-label">Who are you looking to meet? </span>
                            <div className="form__form-group-field custom_select"> 
                              <select
                                className="custom-select"
                                name="lookingFor"  
                                value={addUserFormik.values.lookingFor}
                                onChange={addUserFormik.handleChange}
                              >
                                { 
                                  dropdownOptions.lookingFor && dropdownOptions.lookingFor.map((item, i) => { 
                                    return(
                                       <option key={item.id} value={item.name}>
                                        {item.name}
                                      </option>
                                    ) 
                                  })
                                } 
                              </select>
                            </div>
                            {addUserFormik.touched.lookingFor && addUserFormik.errors.lookingFor ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.lookingFor}
                              </div>
                            ) : null}
                          </div>
                        </Col> */}
                        {/* <Col lg="3">
                        <FormGroup>
                            <Label for="ad">Add photo</Label>
                            <Input
                              name="photo" 
                              label="Add photo"
                              onChange={(event) => {
                                addUserFormik.setFieldValue(
                                  "photo",
                                  event.target.files
                                );
                              }}
                              type="file"
                              multiple="multiple"
                              accept="image/*"
                            />
                            {addUserFormik.touched.photo && addUserFormik.errors.photo ? (
                              <div className="text-start mb-1 text-danger">
                                {addUserFormik.errors.photo}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col> */}
                      </Row>
                      <Row>
                        <Col lg="3">
                          <div className="form__form-group">
                            <div className="form__form-group form__form-group-field"></div>
                          </div> 
                          <Button className="account__btn" type="submit" color="primary">
                            Create
                          </Button> 
                        </Col>
                      </Row>
                      
                      </Form>
                    </Col>
                  </Row>
                </>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default AddUser;
