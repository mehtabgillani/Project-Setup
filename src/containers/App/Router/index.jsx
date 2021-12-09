import React from 'react';
import { Switch } from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import LogIn from '../../../containers/Account/LogIn/index';
import WrappedRoutes from './WrappedRoutes';
import PublicRoute from '../../../Auth/publicRoute'
import PrivateRoute from '../../../Auth/privateRoute' 
import ResetPassword from '../../Account/ResetPassword/index'
// import NotFound404 from '../../404/NotFound404'

const Router = () => {

  return (
    <MainWrapper>
      <main>
        <Switch>
          <PublicRoute restricted={false} component={ResetPassword} path="/reset_password/:user_id?/:forgotToken?/" />
          {/* <PublicRoute restricted={false} path='/404' component={NotFound404} /> */}
          <PublicRoute restricted={true} component={LogIn} path="/" exact />
          <PrivateRoute path="/" component={WrappedRoutes} />
        </Switch>
      </main>
    </MainWrapper>
  )
};
export default Router;









// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import MainWrapper from '../MainWrapper';
// import Landing from '../../Landing/index';
// import NotFound404 from '../../DefaultPage/404/index';
// import LockScreen from '../../Account/LockScreen/index';
// import LogIn from '../../Account/LogIn/index';
// import LogInPhoto from '../../Account/LogInPhoto/index';
// import Register from '../../Account/Register/index';
// import RegisterPhoto from '../../Account/RegisterPhoto/index';
// import ResetPassword from '../../Account/ResetPassword/index';
// import ResetPasswordPhoto from '../../Account/ResetPasswordPhoto';
// import WrappedRoutes from './WrappedRoutes';

// const Router = () => (
//   <MainWrapper>
//     <main>
//       <Switch>
//         <Route exact path="/" component={Landing} />
//         <Route path="/404" component={NotFound404} />
//         <Route path="/lock_screen" component={LockScreen} />
//         <Route path="/log_in" component={LogIn} />
//         <Route path="/log_in_photo" component={LogInPhoto} />
//         <Route path="/register" component={Register} />
//         <Route path="/register_photo" component={RegisterPhoto} />
//         <Route path="/reset_password" component={ResetPassword} />
//         <Route path="/reset_password_photo" component={ResetPasswordPhoto} />
//         <Route path="/" component={WrappedRoutes} />
//       </Switch>
//     </main>
//   </MainWrapper>
// );

// export default Router;


