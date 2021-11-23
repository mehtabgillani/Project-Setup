import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap'; 
import MailOutlineIcon from 'mdi-react/MailOutlineIcon';
import CallOutlineIcon from 'mdi-react/CallOutlineIcon'; 
import CakeVariantIcon from 'mdi-react/CakeVariantIcon'; 

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = ({userDetail}) => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={userDetail.UserPhotos && userDetail.UserPhotos[0] ? userDetail.UserPhotos[0].url : Ava } alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="profile__name">{userDetail.name ? userDetail.name: ''}</p>
            <p className="profile__contact"> 
              <MailOutlineIcon className="profileIcon"/> 
              {userDetail.email ? userDetail.email: ''}
            </p>
            <p className="profile__contact" dir="ltr">
              <CallOutlineIcon className="profileIcon"/>  
              {userDetail.phoneNumber ? userDetail.phoneNumber: ''}
            </p> 
            <p className="profile__work">
              <CakeVariantIcon className="profileIcon"/> 
              {userDetail.birthDate ? userDetail.birthDate: ''}
            </p>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">
            {userDetail.sex && userDetail.sex.name ? userDetail.sex.name: ''}
            </p>
            <p className="profile__stat-title">Gender</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number"> {userDetail.height ? userDetail.height: ''}</p> 
            <p className="profile__stat-title">Height</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">{userDetail.vaccinated == null ? 'Rather not to say': userDetail.vaccinated}</p>
            <p className="profile__stat-title">Vaccinated</p>
          </div>   
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
