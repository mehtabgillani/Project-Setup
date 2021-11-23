import React from 'react';
import {
  Card, CardBody, Col, Badge,
} from 'reactstrap';  
const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const AboutProfile = ({userDetail}) => (
  <Col md={12} lg={12} xl={12}>
    <Card>
    <p onClick={()=>{console.log("user detail",userDetail)}}> heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</p>
      <CardBody className="profile__card about_profile"> 
        <div className="profile_about_info"> 
            <p className="profile__name mb-1"> About </p> 
            <p className="profile__contact" dir="ltr">
            {userDetail.aboutYourself ? userDetail.aboutYourself: ''}
             </p>    
            <div className="pt-2"> 
              <p className="profile__name mb-1">Interested In</p>  
              {userDetail.Interests && userDetail.Interests.map((intrest,id)=>{
                return(
                  <Badge className="mr-1" color="info" pill>{intrest.name}</Badge>
                )
              })}
              {/* <Badge className="mr-1" color="info" pill>Erotic Emails</Badge>
              <Badge color="info" pill>Full Swap</Badge>     */}
            </div>    
        </div>
         
      </CardBody>
    </Card>
  </Col>
);

export default AboutProfile;
