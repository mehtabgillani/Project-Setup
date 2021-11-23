import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form, Input, Button, FormGroup, Label
} from "reactstrap";  
import ProfileMain from './components/ProfileMain';   
import AboutProfile from './components/AboutProfile';   
import ProfileTabs from './components/ProfileTabs';
import { useDispatch, useSelector } from "react-redux";

function ViewUser() {
  const userDetail = useSelector((state) => state.Users.userData);
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title mb-3" 
              >
                User Detail
              </h4>
            </Col>
          </Row>
        </div>
        

        <Row>
          <Col lg="12"> 
            <>  
              <div className="profile">
                <Row>
                  <Col md={12} lg={12} xl={4}>
                    <Row>
                      <ProfileMain userDetail={userDetail} />  
                      <AboutProfile userDetail={userDetail} />  
                    </Row>
                  </Col>
                  <ProfileTabs userDetail={userDetail}/>
                </Row>
              </div> 
            </> 
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ViewUser;
