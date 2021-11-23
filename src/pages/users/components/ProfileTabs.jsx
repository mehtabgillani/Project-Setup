import React, { useState } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane,
} from 'reactstrap'; 

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;
const ProfileTabs = ({userDetail}) => {
    
  return (
    <Col md={12} lg={12} xl={8}>
      <Card>
        <div className="detailed_info profile__card tabs tabs--bordered-bottom">
          <div className="tabs__wrap"> 
            <TabContent> 
              <Row className="pt-4 ">
                <Col xl={12}>
                  <p className="profile__name mt-1 mb-1">More Details</p>
                </Col>
                <Col md={6} lg={6} xl={6}>

                  <ul class="list-group">
                    <li class="list-group-item">STI's & STD's <span class="float-right">
                    {userDetail.stiTested ? 'yes': 'Rather not to say'}
                      </span></li>
                    <li class="list-group-item">Sexual Orientation <span class="float-right"> {userDetail.sexual_orientation && userDetail.sexual_orientation.name ? userDetail.sexual_orientation.name : ''}</span></li>
                    <li class="list-group-item">Relationship Status <span class="badge float-right">{userDetail.relationship_status && userDetail.relationship_status.name ? userDetail.relationship_status.name : ''}</span></li>
                  </ul>
                </Col>
                <Col md={6} lg={6} xl={6}>
                  <ul class="list-group">
                    <li class="list-group-item">Build Is <span class="float-right">{userDetail.body_build && userDetail.body_build.name ? userDetail.body_build.name : ''}</span></li>
                    <li class="list-group-item">Ethnicity <span class="float-right">{userDetail.ethni && userDetail.ethni.name ? userDetail.ethni.name : ''}</span></li>
                    <li class="list-group-item">Habits<span class="float-right">{userDetail.drink ? 'drink,' : ''}
                    {userDetail.weed ? 'Weed,' : ''}
                    {userDetail.smoke ? 'Smoke' : ''}
                    </span></li> 
                  </ul>
                </Col>
                <Col md={6} lg={6} xl={6}>
                  <p className="profile__name mt-2">Partners on the app</p>
                  <div className="project-member">
                    <div className="project-member__avatar-wrap">
                      <img src={Ava} alt="" />
                    </div>
                    <div>
                      <p className="project-member__name">Stephen John</p>
                      <p className="project-member__post">Partner</p>
                    </div> 
                  </div>
                </Col>
              </Row> 
            </TabContent>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
