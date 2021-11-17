import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Tooltip,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux"; 
import {
  getUsersList, 
  // deleteUser,
} from "../../store/User/actions"; 
import moment from "moment";
function AddUser() {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.Users);
   
   
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
