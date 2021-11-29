import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewUser,
  fetchRegistrationDropdown,
  getUser,
  getUserSuccess,
  updateUser,
  setLoader
} from "../../store/User/actions";
import SelectOption from 'react-select'
import EyeIcon from "mdi-react/EyeIcon";
import moment from "moment";
function AddUser() {
  const dispatch = useDispatch();
  
  const dropdownOptions = useSelector(
    (state) => state.Users.registrationDropdownValues
  );    
  const userLookingFor= dropdownOptions.lookingFor && dropdownOptions.lookingFor.map((data,id)=>{
    const dataValue = { 'value': data.id, 'label': data.name }; 
    return  dataValue 
  })       
  const LookingForCustomStyles = {
    control: base => ({
      ...base,
      // height: 32,
      minHeight: 32
    })
  };
  const userDetail = useSelector((state) => state.Users.userDetail);
  const updateAction = useSelector((state) => state.Users.updateAction);
  let lookingforParsedValue =[];
  const loader = useSelector((state) => state.Users.loader);
  useEffect(() => {
    dispatch(fetchRegistrationDropdown());
    if (updateAction.action == true) {
      dispatch(getUser(updateAction.id));
    } else if (updateAction.action == false) {
      dispatch(
        getUserSuccess({
          status: "success",
          data: {
            name: "",
            email: "",
            password: "",
            number: "",
            birthdate: "",
            height: "average",
            orientation: 1,
            gender: 10,
            relationship: 15,
            buildIs: 21,
            ethnicity: 27,
            // lookingFor: [userLookingFor[2],userLookingFor[1],userLookingFor[3]], 
            lookingFor:userLookingFor[1],
          },          
        })
      );
    }
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
    isUpdate: Yup.boolean().default(updateAction.action),
    name: Yup.string()
      .required("Username is required")
      .matches(/^[^-\s]{1,40}$/, "Invalid username!"),
    email: Yup.mixed().when(["isUpdate"], {
      is: true,
      then: Yup.mixed(),
      otherwise: Yup.string()
        .email("Email must be a valid email address")
        .required("Email is required"),
    }),

    password: Yup.mixed().when(["isUpdate"], {
      is: true,
      then: Yup.mixed(),
      otherwise: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must contain 8 characters,  One uppercase, One lowercase, One number and one special case character"
        ),
    }),
    number: Yup.string()
      .required("Phone number is required")
      .min(10, "Phone number can not be less than 10 digits")
      .max(17, "Phone number can not be more than 17 digits"),
    birthdate: Yup.string().required("Birthday is required"),
    // location: Yup.string().required("Location is required"),
    height: Yup.string().required("Height is required"),
    orientation: Yup.string().required("Sexual orientation is required"),
    gender: Yup.string().required("Gender is required"),
    relationship: Yup.string().required("Relationship status is required"),
    buildIs: Yup.string().required("Build is required"),
    // ethnicity: Yup.string().required("Ethnicity is required"),
    lookingFor: Yup.array().required("Looking to meet is required"),
    // lookingFor: Yup.array().of(
    //   Yup.object().shape({
    //     value: Yup.int().required("Looking to meet is required"),
    //     label: Yup.string()
    //       .required("Looking to meet is required") 
    //   })
    // )
    // photo: Yup.string().required("Photo is required"),
  });

  const addUserFormik = useFormik({
    enableReinitialize: true,
    initialValues: userDetail,
    validationSchema: AddUserSchema,
    onSubmit: async (values) => {
      console.log("values of add users form", values.lookingFor);
      values.lookingFor.map((parseValue)=>{
        console.log("values in inner loop",parseValue.value)
        lookingforParsedValue.push(parseValue.value)
      })
      console.log("data for bilal",lookingforParsedValue)
      dispatch(setLoader(true));
      if (updateAction.action == false) {
        await dispatch(
          addNewUser({
            name: values.name,
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
            lookingFor: lookingforParsedValue,
            // photo: values.photo,
          })
        );
      } else if (updateAction.action == true) {
        await dispatch(
          updateUser({
            id: updateAction.id,
            name: values.name,
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
            lookingFor: lookingforParsedValue,
            // photo: values.photo,
          })
        );
      }
    },
  });

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title mb-3"
              >
                {updateAction.action == false ? "Add User" : "Update User"}
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
                      <Form
                        className="form add_new_user login-form"
                        onSubmit={addUserFormik.handleSubmit}
                      >
                        <Row>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label" onClick={()=>{
                                console.log("vKUW U Qbr ro see",[userLookingFor[2],userLookingFor[1],userLookingFor[3]])
                              }}>
                                Username
                              </span>
                              <div className="form__form-group-field">
                                <Input
                                  className="input-without-border-radius"
                                  name="name"
                                  label="name"
                                  value={addUserFormik.values.name}
                                  onChange={addUserFormik.handleChange}
                                  placeholder="Enter username"
                                  type="text"
                                />
                              </div>
                              {addUserFormik.touched.name &&
                              addUserFormik.errors.name ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.name}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          {updateAction.action ? (
                            <Col lg="3">
                              <div className="form__form-group">
                                <span className="form__form-group-label">
                                  Email{" "}
                                </span>
                                <div className="form__form-group-field">
                                  <Input
                                    className="input-without-border-radius"
                                    name="email"
                                    label="email"
                                    value={addUserFormik.values.email}
                                    onChange={addUserFormik.handleChange}
                                    placeholder="Enter email"
                                    type="text"
                                    disabled
                                  />
                                </div>
                                {addUserFormik.touched.email &&
                                addUserFormik.errors.email ? (
                                  <div className="text-start mb-1 text-danger">
                                    {addUserFormik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          ) : (
                            <Col lg="3">
                              <div className="form__form-group">
                                <span className="form__form-group-label">
                                  Email{" "}
                                </span>
                                <div className="form__form-group-field">
                                  <Input
                                    className="input-without-border-radius"
                                    name="email"
                                    label="email"
                                    value={addUserFormik.values.email}
                                    onChange={addUserFormik.handleChange}
                                    placeholder="Enter email"
                                    type="text"
                                  />
                                </div>
                                {addUserFormik.touched.email &&
                                addUserFormik.errors.email ? (
                                  <div className="text-start mb-1 text-danger">
                                    {addUserFormik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          )}
                          {updateAction.action ? (
                            // <Col lg="3">
                            //   <div className="form__form-group">
                            //     <span className="form__form-group-label">
                            //       Password
                            //     </span>
                            //     <div className="form__form-group-field">
                            //       <Input
                            //         className="input-without-border-radius"
                            //         name="password"
                            //         label="password"
                            //         value={addUserFormik.values.password}
                            //         onChange={addUserFormik.handleChange}
                            //         placeholder="Enter password"
                            //         type="text"
                            //         disabled
                            //       />
                            //     </div>
                            //     {addUserFormik.touched.password &&
                            //     addUserFormik.errors.password ? (
                            //       <div className="text-start mb-1 text-danger">
                            //         {addUserFormik.errors.password}
                            //       </div>
                            //     ) : null}
                            //   </div>
                            // </Col>
                            <>
                            </>
                          ) : (
                            <Col lg="3">
                              <div className="form__form-group">
                                <span className="form__form-group-label">
                                  Password
                                </span>
                                <div className="form__form-group-field">
                                  <Input
                                    className="input-without-border-radius"
                                    name="password"
                                    label="password"
                                    value={addUserFormik.values.password}
                                    onChange={addUserFormik.handleChange}
                                    placeholder="Enter password"
                                    type="text"
                                  />
                                </div>
                                {addUserFormik.touched.password &&
                                addUserFormik.errors.password ? (
                                  <div className="text-start mb-1 text-danger">
                                    {addUserFormik.errors.password}
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          )}

                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                {" "}
                                Phone number
                              </span>
                              <div className="form__form-group-field">
                                <Input
                                  className="input-without-border-radius"
                                  name="number"
                                  label="Phone number"
                                  value={addUserFormik.values.number}
                                  onChange={addUserFormik.handleChange}
                                  placeholder="Enter phone number"
                                  type="text"
                                />
                              </div>
                              {addUserFormik.touched.number &&
                              addUserFormik.errors.number ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.number}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                When is your birthday?
                              </span>
                              <div className="form__form-group-field">
                                <Input
                                  className="input-without-border-radius"
                                  name="birthdate"
                                  label="When is your birthday?"
                                  value={addUserFormik.values.birthdate}
                                  onChange={addUserFormik.handleChange}
                                  placeholder="Enter Date"
                                  type="date"
                                  max={moment().format("YYYY-MM-DD")}
                                />
                              </div>
                              {addUserFormik.touched.birthdate &&
                              addUserFormik.errors.birthdate ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.birthdate}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          {/* <Col lg="3">
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
                        </Col>  */}
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                How tall are you?
                              </span>
                              <div className="form__form-group-field custom_select">
                                <select
                                  className="custom-select"
                                  name="height"
                                  value={addUserFormik.values.height}
                                  onChange={addUserFormik.handleChange}
                                >
                                  <option value="Average">Average</option>
                                  <option value="Short">Short</option>
                                  <option value="FunSized">Fun sized</option>
                                  <option value="Tall">Tall</option>
                                </select>
                              </div>
                              {addUserFormik.touched.height &&
                              addUserFormik.errors.height ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.height}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                What is your sexual orientation?
                              </span>
                              <div className="form__form-group-field custom_select">
                                <select
                                  className="custom-select"
                                  name="orientation"
                                  value={addUserFormik.values.orientation}
                                  onChange={addUserFormik.handleChange}
                                >
                                  {dropdownOptions.orientation &&
                                    dropdownOptions.orientation.map(
                                      (item, i) => {
                                        return (
                                          <option key={item.id} value={item.id}>
                                            {item.name}
                                          </option>
                                        );
                                      }
                                    )}
                                </select>
                              </div>
                              {addUserFormik.touched.orientation &&
                              addUserFormik.errors.orientation ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.orientation}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                What is your gender?
                              </span>
                              <div className="form__form-group-field custom_select">
                                <select
                                  className="custom-select"
                                  name="gender"
                                  value={addUserFormik.values.gender}
                                  onChange={addUserFormik.handleChange}
                                >
                                  {dropdownOptions.gender &&
                                    dropdownOptions.gender.map((item, i) => {
                                      return (
                                        <option key={item.id} value={item.id}>
                                          {item.name}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                              {addUserFormik.touched.gender &&
                              addUserFormik.errors.gender ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.gender}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                What is your relationship status?
                              </span>
                              <div className="form__form-group-field custom_select">
                                <select
                                  className="custom-select"
                                  name="relationship"
                                  value={addUserFormik.values.relationship}
                                  onChange={addUserFormik.handleChange}
                                >
                                  {dropdownOptions.relationshipStatus &&
                                    dropdownOptions.relationshipStatus.map(
                                      (item, i) => {
                                        return (
                                          <option key={item.id} value={item.id}>
                                            {item.name}
                                          </option>
                                        );
                                      }
                                    )}
                                </select>
                              </div>
                              {addUserFormik.touched.relationship &&
                              addUserFormik.errors.relationship ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.relationship}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                What would you say your build is?
                              </span>
                              <div className="form__form-group-field custom_select">
                                <select
                                  className="custom-select"
                                  name="buildIs"
                                  value={addUserFormik.values.buildIs}
                                  onChange={addUserFormik.handleChange}
                                >
                                  {dropdownOptions.exercise &&
                                    dropdownOptions.exercise.map((item, i) => {
                                      return (
                                        <option key={item.id} value={item.id}>
                                          {item.name}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                              {addUserFormik.touched.buildIs &&
                              addUserFormik.errors.buildIs ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.buildIs}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                What is your ethnicity?
                              </span>
                              <div className="form__form-group-field custom_select">
                                <select
                                  className="custom-select"
                                  name="ethnicity"
                                  value={addUserFormik.values.ethnicity}
                                  onChange={addUserFormik.handleChange}
                                >
                                  {dropdownOptions.ethnicity &&
                                    dropdownOptions.ethnicity.map((item, i) => {
                                      return (
                                        <option key={item.id} value={item.id}>
                                          {item.name}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                              {addUserFormik.touched.ethnicity &&
                              addUserFormik.errors.ethnicity ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.ethnicity}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Who are you looking to meet?{" "}
                              </span>
                              <SelectOption
                                // defaultValue={[userLookingFor[2], userLookingFor[3]]}
                                isMulti
                                name="lookingFor"
                                options={userLookingFor}
                                value={addUserFormik.values.lookingFor}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                styles={LookingForCustomStyles}
                                onChange={(userLookingFor) => addUserFormik.setFieldValue('lookingFor', userLookingFor)}
                              /> 
                              <div className="form__form-group-field custom_select">
                                {/* <select
                                  className="custom-select"
                                  name="lookingFor"
                                  value={addUserFormik.values.lookingFor}
                                  onChange={addUserFormik.handleChange}
                                >
                                  {dropdownOptions.lookingFor &&
                                    dropdownOptions.lookingFor.map(
                                      (item, i) => {
                                        return (
                                          <option
                                            key={item.id}
                                            value={item.id}
                                          >
                                            {item.name}
                                          </option>
                                        );
                                      }
                                    )}
                                </select> */}
                              </div>
                              {addUserFormik.touched.lookingFor &&
                              addUserFormik.errors.lookingFor ? (
                                <div className="text-start mb-1 text-danger">
                                  {addUserFormik.errors.lookingFor}
                                </div>
                              ) : null}
                            </div>
                          </Col>
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
                            {loader == true && false ? (
                            <div className="d-flex justify-content-center account__btn" style={{height:'40px',paddingTop:'3px'}}>
                            <div className="spinner-border" role="status" style={{color:'whitesmoke'}}>
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                            ) : (
                              <>
                                {updateAction.action == false ? (
                                  <Button
                                    className="account__btn"
                                    type="submit"
                                    color="primary"
                                    // onClick={() => {
                                    
                                    //   addUserFormik.handleSubmit();
                                    // }}
                                  >
                                    Create
                                  </Button>
                                ) : (
                                  <Button
                                    className="account__btn"
                                    type="submit"
                                    color="primary"
                                    // onClick={() => {
                                    
                                    //   addUserFormik.handleSubmit();
                                    // }}
                                  >
                                    Update
                                  </Button>
                                )}
                              </>
                            )}
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
