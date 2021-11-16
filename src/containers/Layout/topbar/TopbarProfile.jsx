import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import { UserProps, AuthOProps } from '../../../shared/prop-types/ReducerProps';
import { hookAuth0 } from '../../../shared/components/auth/withAuth0';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = ({ user, auth0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logout = () => {
    localStorage.removeItem('easydev');
  };

  return (
    <div className="topbar__profile">
      <button className="topbar__avatar" type="button" onClick={toggleProfile}>
        <img
          className="topbar__avatar-img"
          src={(auth0.user && auth0.user.picture) || user.avatar || Ava}
          alt="avatar"
        />
        <p className="topbar__avatar-name">
          { auth0.loading ? 'Loading...' : (auth0.user && auth0.user.name) || user.fullName}
        </p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && <button className="topbar__back" type="button" onClick={toggleProfile} />}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          {/* <TopbarMenuLink
            title="My Profile"
            icon="user"
            path="/account/profile"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Calendar"
            icon="calendar-full"
            path="/default_pages/calendar"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Tasks"
            icon="list"
            path="/todo"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Inbox"
            icon="inbox"
            path="/mail"
            onClick={toggleProfile}
          />
          <div className="topbar__menu-divider" /> */}
          {/* <TopbarMenuLink
            title="Account Settings"
            icon="cog"
            path="/account/profile"
            onClick={toggleProfile}
          /> */}
          {auth0.isAuthenticated && (
            <TopbarMenuLink
              title="Log Out"
              icon="exit" 
              onClick={()=>{
                localStorage.clear()
              }}
            />
          )
          }
          <TopbarMenuLink
            title="Log Out"
            icon="exit" 
            // onClick={logout}
            onClick={()=>{
              localStorage.clear()
            }}
          />
        </div>
      </Collapse>
    </div>
  );
};

TopbarProfile.propTypes = {
  user: UserProps.isRequired,
  auth0: AuthOProps.isRequired,
};

export default hookAuth0(TopbarProfile);
