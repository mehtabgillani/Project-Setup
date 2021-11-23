import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form, Input, Button, FormGroup, Label
} from "reactstrap";  

function ViewUser() {
  
  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title mb-3" 
              >
                User
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

export default ViewUser;
