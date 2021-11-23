import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap'; 
import MailOutlineIcon from 'mdi-react/MailOutlineIcon';
import CallOutlineIcon from 'mdi-react/CallOutlineIcon'; 
import CakeVariantIcon from 'mdi-react/CakeVariantIcon'; 

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={Ava} alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="profile__name">Larry Boom</p>
            <p className="profile__contact"> 
              <MailOutlineIcon className="profileIcon"/> 
              larry.mail@gmail.com
            </p>
            <p className="profile__contact" dir="ltr">
              <CallOutlineIcon className="profileIcon"/> 
              +23-123-743-23-21
            </p> 
            <p className="profile__work">
              <CakeVariantIcon className="profileIcon"/>
              Feb 26th 1991
            </p>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">Female</p>
            <p className="profile__stat-title">Gender</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">5.7</p>
            <p className="profile__stat-title">Height</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">Yes</p>
            <p className="profile__stat-title">Vaccinated</p>
          </div>   
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
