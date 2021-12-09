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
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import DeleteIcon from 'mdi-react/DeleteIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import DeleteModal from "./components/modal";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  addNewUser,
  addNewOption,
  fetchRegistrationDropdown, 
  deleteOption,
  setLoader
} from "../../store/User/actions"; 
function AddOptions() {
  const dispatch = useDispatch();
  const [optionId, setOptionId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [orientationoption, setOrientationOption] = useState();
  const [genderoption, setGenderOption] = useState();
  const [relationshipoption, setRelationshipOption] = useState();
  const [buildisoption, setBuildIsOption] = useState();
  const [ethnicityoption, setEthnicityOption] = useState();
  const [lookingForoption, setLookingForOption] = useState();
  const [interestsoption, setInterestsOption] = useState();
  const [value, setValue] = useState();
  const dropdownOptions = useSelector(
    (state) => state.Users.registrationDropdownValues
  ); 
  console.log("get interest dropdownOptions", dropdownOptions)
  const userDetail = useSelector((state) => state.Users.userDetail); 
   
  useEffect(() => {
    dispatch(fetchRegistrationDropdown()); 
  }, []); 
  const InterestsOptionSchema = Yup.object().shape({ 
    interests: Yup.string().required("Interests is required")
  });
  const interestsOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      interests: "", 
    },
    validationSchema: InterestsOptionSchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          interests: values.interests, 
          interestsoption:interestsoption,
        })
      );
    },
  }); 
  const LookingForSchema = Yup.object().shape({ 
    lookingFor: Yup.string().required("Looking to meet is required")
  });
  const lookingForOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      lookingFor: "", 
    },
    validationSchema: LookingForSchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          lookingFor: values.lookingFor, 
          lookingForoption:lookingForoption,
        })
      );
    },
  }); 
  const EthnicitySchema = Yup.object().shape({ 
    ethnicity: Yup.string().required("Ethnicity is required")
  });
  const ethnicityOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      ethnicity: "", 
    },
    validationSchema: EthnicitySchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          ethnicity: values.ethnicity, 
          ethnicityoption:ethnicityoption,
        })
      );
    },
  }); 
  const BuildIsSchema = Yup.object().shape({ 
    buildIs: Yup.string().required("Build is required"),  
  });
  const buildIsOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      buildIs: "", 
    },
    validationSchema: BuildIsSchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          buildIs: values.buildIs, 
          buildisoption:buildisoption,
        })
      );
    },
  }); 
  const GenderSchema = Yup.object().shape({ 
    gender: Yup.string().required("Gender is required"),  
  });
  const genderOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      gender: "", 
    },
    validationSchema: GenderSchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          gender: values.gender, 
          genderoption:genderoption,
        })
      );
    },
  }); 
  const RelationshipSchema = Yup.object().shape({ 
    relationship: Yup.string().required("Relationship status is required"),  
  });
  const relationshipOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      relationship: "", 
    },
    validationSchema: RelationshipSchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          relationship: values.relationship, 
          relationshipoption:relationshipoption,
        })
      );
    },
  }); 
  const OrientationSchema = Yup.object().shape({ 
    orientation: Yup.string().required("Sexual orientation is required"),  
  });
  const orientationOptionFormik = useFormik({
    enableReinitialize: true,     
    initialValues: {
      orientation: "", 
    },
    validationSchema: OrientationSchema,
    onSubmit: async (values) => { 
      console.log("Option data ",values)
      dispatch(setLoader(true));
      await dispatch(
        addNewOption({
          orientation: values.orientation, 
          orientationoption:orientationoption,
        })
      );
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
                Add/Update Select Options
              </h4>
            </Col>
          </Row>
        </div>
        <DeleteModal
          // page={users.userActivePage}
          actionFunction={deleteOption}
          id={optionId}
          modal={deleteModal}
          setModal={setDeleteModal}
          color="danger"
          title="Delete Option!"
          default
          message="Are you sure you want to delete this option? "
        />
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <>
                  <Row className="justify-content-center mt-3">
                    <Col lg="12">
                      {/* <Form
                        className="form add_new_user login-form"
                        onSubmit={addUserFormik.handleSubmit}
                      > */}
                        <Row> 
                          <Col lg="3">
                            <Form
                              className="form add_new_user login-form"
                              onSubmit={orientationOptionFormik.handleSubmit}
                            >
                            <div className="form__form-group"> 
                              <span className="form__form-group-label">
                                Add sexual orientation option
                              </span>
                              <InputGroup>
                                <Input placeholder=""
                                 name="orientation"
                                 label="Orientation"
                                 value={orientationOptionFormik.values.orientation}
                                 onChange={orientationOptionFormik.handleChange}
                                /> 
                                <InputGroupText className="text-primary" 
                                    onClick={() => {
                                      setOrientationOption("orientation");
                                      orientationOptionFormik.handleSubmit()
                                    }}
                                     > 
                                    <PlusIcon  size={18} /> 
                                </InputGroupText>
                              </InputGroup>
                              {orientationOptionFormik.touched.orientation && orientationOptionFormik.errors.orientation ? (
                                  <div className="text-start mb-1 text-danger">
                                    {orientationOptionFormik.errors.orientation}
                                  </div>
                                ) : null}
                              <ListGroup>
                                {dropdownOptions.orientation &&
                                  dropdownOptions.orientation.map(
                                    (item, id) => {
                                      return (
                                        <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                          <span className="float-left">
                                            {item.name}
                                          </span>
                                          <span className="float-right text-danger"
                                            id={`delete_${id}`}
                                            style={{ marginRight: "5px" }}
                                            onClick={() => {
                                              setDeleteModal(true);
                                              setOptionId(item.id);
                                            }}
                                          >
                                            <DeleteIcon size={15} />
                                          </span>
                                        </ListGroupItem>
                                      );
                                    }
                                  )}
                              </ListGroup> 
                            </div>
                            </Form>
                          </Col>
                          <Col lg="3">
                          <Form
                              className="form add_new_user login-form"
                              onSubmit={genderOptionFormik.handleSubmit}
                            >
                            <div className="form__form-group"> 
                              <span className="form__form-group-label">
                                Add gender option
                              </span>
                              <InputGroup>
                                <Input placeholder=""
                                 name="gender"
                                 label="Gender"
                                 value={genderOptionFormik.values.gender}
                                 onChange={genderOptionFormik.handleChange}
                                /> 
                                <InputGroupText className="text-primary" 
                                    onClick={() => {
                                      setGenderOption("gender");
                                      genderOptionFormik.handleSubmit()
                                    }}
                                     > 
                                    <PlusIcon  size={18} /> 
                                </InputGroupText>
                              </InputGroup>
                              {genderOptionFormik.touched.gender && genderOptionFormik.errors.gender ? (
                                  <div className="text-start mb-1 text-danger">
                                    {genderOptionFormik.errors.gender}
                                  </div>
                                ) : null}
                              <ListGroup> 
                                {dropdownOptions.gender &&
                                  dropdownOptions.gender.map(
                                    (item, id) => {
                                      return (
                                        <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                          <span className="float-left">
                                            {item.name}
                                          </span>
                                          <span className="float-right text-danger"
                                            id={`delete_${id}`}
                                            style={{ marginRight: "5px" }}
                                            onClick={() => {
                                              setDeleteModal(true);
                                              setOptionId(item.id);
                                            }}
                                          >
                                            <DeleteIcon size={15} />
                                          </span>
                                        </ListGroupItem>
                                      );
                                    }
                                  )}
                              </ListGroup> 
                            </div>
                            </Form> 
                          </Col>
                          <Col lg="3">
                            <Form
                                className="form add_new_user login-form"
                                onSubmit={genderOptionFormik.handleSubmit}
                              >
                              <div className="form__form-group"> 
                                <span className="form__form-group-label">
                                  Add relationship status option
                                </span>
                                <InputGroup>
                                  <Input placeholder=""
                                  name="relationship"
                                  label="Relationship"
                                  value={relationshipOptionFormik.values.relationship}
                                  onChange={relationshipOptionFormik.handleChange}
                                  /> 
                                  <InputGroupText className="text-primary" 
                                      onClick={() => {
                                        setRelationshipOption("relationship");
                                        relationshipOptionFormik.handleSubmit()
                                      }}
                                      > 
                                      <PlusIcon  size={18} /> 
                                  </InputGroupText>
                                </InputGroup>
                                {relationshipOptionFormik.touched.relationship && relationshipOptionFormik.errors.relationship ? (
                                    <div className="text-start mb-1 text-danger">
                                      {relationshipOptionFormik.errors.relationship}
                                    </div>
                                  ) : null}
                                <ListGroup> 
                                  {dropdownOptions.relationshipStatus &&
                                    dropdownOptions.relationshipStatus.map(
                                      (item, id) => {
                                        return (
                                          <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                            <span className="float-left">
                                              {item.name}
                                            </span>
                                            <span className="float-right text-danger"
                                              id={`delete_${id}`}
                                              style={{ marginRight: "5px" }}
                                              onClick={() => {
                                                setDeleteModal(true);
                                                setOptionId(item.id);
                                              }}
                                            >
                                              <DeleteIcon size={15} />
                                            </span>
                                          </ListGroupItem>
                                        );
                                      }
                                    )}
                                </ListGroup> 
                              </div>
                              </Form>
                            {/* <div className="form__form-group">
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
                            </div> */}
                          </Col>
                          <Col lg="3">
                          <Form
                              className="form add_new_user login-form"
                              onSubmit={buildIsOptionFormik.handleSubmit}
                            >
                            <div className="form__form-group"> 
                              <span className="form__form-group-label">
                                  Add build option
                              </span>
                              <InputGroup>
                                <Input placeholder=""
                                 name="buildIs"
                                //  label="BuildIs"
                                 value={buildIsOptionFormik.values.buildIs}
                                 onChange={buildIsOptionFormik.handleChange}
                                /> 
                                <InputGroupText className="text-primary" 
                                    onClick={() => {
                                      setBuildIsOption("buildIs");
                                      buildIsOptionFormik.handleSubmit()
                                    }}
                                     > 
                                    <PlusIcon size={18} /> 
                                </InputGroupText>
                              </InputGroup>
                              {buildIsOptionFormik.touched.buildIs && buildIsOptionFormik.errors.buildIs ? (
                                  <div className="text-start mb-1 text-danger">
                                    {buildIsOptionFormik.errors.buildIs}
                                  </div>
                                ) : null}
                              <ListGroup> 
                                {dropdownOptions.exercise &&
                                  dropdownOptions.exercise.map(
                                    (item, id) => {
                                      return (
                                        <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                          <span className="float-left">
                                            {item.name}
                                          </span>
                                          <span className="float-right text-danger"
                                            id={`delete_${id}`}
                                            style={{ marginRight: "5px" }}
                                            onClick={() => {
                                              setDeleteModal(true);
                                              setOptionId(item.id);
                                            }}
                                          >
                                            <DeleteIcon size={15} />
                                          </span>
                                        </ListGroupItem>
                                      );
                                    }
                                  )}
                              </ListGroup> 
                            </div>
                            </Form>
                            {/* <div className="form__form-group">
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
                            </div> */}
                          </Col>
                          <Col lg="3">
                          <Form
                              className="form add_new_user login-form"
                              onSubmit={ethnicityOptionFormik.handleSubmit}
                            >
                            <div className="form__form-group"> 
                              <span className="form__form-group-label">
                                  Add ethnicity option
                              </span>
                              <InputGroup>
                                <Input placeholder=""
                                 name="ethnicity"
                                 label="ethnicity"
                                 value={ethnicityOptionFormik.values.ethnicity}
                                 onChange={ethnicityOptionFormik.handleChange}
                                /> 
                                <InputGroupText className="text-primary" 
                                    onClick={() => {
                                      setEthnicityOption("ethnicity");
                                      ethnicityOptionFormik.handleSubmit()
                                    }}
                                     > 
                                    <PlusIcon size={18} /> 
                                </InputGroupText>
                              </InputGroup>
                              {ethnicityOptionFormik.touched.ethnicity && ethnicityOptionFormik.errors.ethnicity ? (
                                  <div className="text-start mb-1 text-danger">
                                    {ethnicityOptionFormik.errors.ethnicity}
                                  </div>
                                ) : null}
                              <ListGroup> 
                                {dropdownOptions.ethnicity &&
                                  dropdownOptions.ethnicity.map(
                                    (item, id) => {
                                      return (
                                        <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                          <span className="float-left">
                                            {item.name}
                                          </span>
                                          <span className="float-right text-danger"
                                            id={`delete_${id}`}
                                            style={{ marginRight: "5px" }}
                                            onClick={() => {
                                              setDeleteModal(true);
                                              setOptionId(item.id);
                                            }}
                                          >
                                            <DeleteIcon size={15} />
                                          </span>
                                        </ListGroupItem>
                                      );
                                    }
                                  )}
                              </ListGroup> 
                            </div>
                            </Form> 
                          </Col>
                          <Col lg="3">
                          <Form
                              className="form add_new_user login-form"
                              onSubmit={lookingForOptionFormik.handleSubmit}
                            >
                            <div className="form__form-group"> 
                              <span className="form__form-group-label">
                                  Add looking to meet option
                              </span>
                              <InputGroup>
                                <Input placeholder=""
                                 name="lookingFor"
                                //  label="ethnicity"
                                 value={lookingForOptionFormik.values.lookingFor}
                                 onChange={lookingForOptionFormik.handleChange}
                                /> 
                                <InputGroupText className="text-primary" 
                                    onClick={() => {
                                      setLookingForOption("lookingToMeet");
                                      lookingForOptionFormik.handleSubmit()
                                    }}
                                     > 
                                    <PlusIcon size={18} /> 
                                </InputGroupText>
                              </InputGroup>
                              {lookingForOptionFormik.touched.lookingFor && lookingForOptionFormik.errors.lookingFor ? (
                                  <div className="text-start mb-1 text-danger">
                                    {lookingForOptionFormik.errors.lookingFor}
                                  </div>
                                ) : null}
                              <ListGroup> 
                                {dropdownOptions.lookingFor &&
                                  dropdownOptions.lookingFor.map(
                                    (item, id) => {
                                      return (
                                        <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                          <span className="float-left">
                                            {item.name}
                                          </span>
                                          <span className="float-right text-danger"
                                            id={`delete_${id}`}
                                            style={{ marginRight: "5px" }}
                                            onClick={() => {
                                              setDeleteModal(true);
                                              setOptionId(item.id);
                                            }}
                                          >
                                            <DeleteIcon size={15} />
                                          </span>
                                        </ListGroupItem>
                                      );
                                    }
                                  )}
                              </ListGroup> 
                            </div>
                            </Form> 
                          </Col>
                          <Col lg="3">
                          <Form
                              className="form add_new_user login-form"
                              onSubmit={interestsOptionFormik.handleSubmit}
                            >
                            <div className="form__form-group"> 
                              <span className="form__form-group-label">
                                  Add interests option
                              </span>
                              <InputGroup>
                                <Input placeholder=""
                                 name="interests"
                                //  label="ethnicity"
                                 value={interestsOptionFormik.values.interests}
                                 onChange={interestsOptionFormik.handleChange}
                                /> 
                                <InputGroupText className="text-primary" 
                                    onClick={() => {
                                      setInterestsOption("interest");
                                      interestsOptionFormik.handleSubmit()
                                    }}
                                     > 
                                    <PlusIcon size={18} /> 
                                </InputGroupText>
                              </InputGroup>
                              {interestsOptionFormik.touched.interests && interestsOptionFormik.errors.interests ? (
                                  <div className="text-start mb-1 text-danger">
                                    {interestsOptionFormik.errors.interests}
                                  </div>
                                ) : null}
                              <ListGroup> 
                                {dropdownOptions.interests &&
                                  dropdownOptions.interests.map(
                                    (item, id) => {
                                      return (
                                        <ListGroupItem className="pt-1 pb-1 pl-2 pr-2" key={item.id} value={item.id}>
                                          <span className="float-left">
                                            {item.name}
                                          </span>
                                          <span className="float-right text-danger"
                                            id={`delete_${id}`}
                                            style={{ marginRight: "5px" }}
                                            onClick={() => {
                                              setDeleteModal(true);
                                              setOptionId(item.id);
                                            }}
                                          >
                                            <DeleteIcon size={15} />
                                          </span>
                                        </ListGroupItem>
                                      );
                                    }
                                  )}
                              </ListGroup> 
                            </div>
                            </Form> 
                          </Col>
                        </Row>
                      {/* </Form> */}
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

export default AddOptions;
