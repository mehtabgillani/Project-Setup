import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import DefaultButtons from '../../containers/UI/Buttons/components/DefaultButtons';
import { Button, ButtonToolbar, Card, CardBody, Col } from "reactstrap";
// import SquareButtons from './components/SquareButtons';
// import RoundedButtons from './components/RoundedButtons';
// import StatusButtons from './components/StatusButtons';
// import ButtonGroups from './components/ButtonGroups';
// import ButtonIcons from './components/ButtonIcons';
// import ButtonDropdown from './components/ButtonDropdown';

function UserPage() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");

  return (
  
      <Card>
        <CardBody>
          <ButtonToolbar>
            <Button outline>Minimal</Button>
            <Button>Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
         <p>this will be my first page where i had to do my first task..</p>
          </ButtonToolbar>
        </CardBody>
      </Card>
   
  );
}

export default UserPage;
