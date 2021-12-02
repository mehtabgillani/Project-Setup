import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Tooltip,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import {
  getSubUsersList,
  deleteSubUser
} from "../../store/Subuser/actions";
import Delete from "../../assets/icons/delete.svg";
import EditIcon from 'mdi-react/EditIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import EyeIcon from 'mdi-react/EyeIcon';

import DeleteModal from "./components/modal";
// import TableSearch from "./components/TableSearch";
import moment from "moment";

import { useHistory } from "react-router-dom";

function SubUsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Subusers);
  const [tooltipOpenObj, setTooltipOpenObj] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const toggleForToolObj1 = (id) => {
    setTooltipOpenObj({
      ...tooltipOpenObj,
      [id]: tooltipOpenObj[id] ? !tooltipOpenObj[id] : true,
    });
  };
  useEffect(() => {
    dispatch(getSubUsersList({
      page: 1,
    }));
  }, []);
  const history = useHistory();
  const routeChange = () => {
    let path = `/add-subuser`;
    history.push(path);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title mb-3"
                onClick={() => {
                  console.log("value in index.js",users)
                }}
              >
                Subusers
              </h4>
            </Col>
            <Col className="text-right" sm="6">
              <Button
                className="mb-3"
                size="sm"
                color="primary"
                onClick={() => {
                  routeChange();

                }}
              >
                Add Subuser
              </Button>
            </Col>
          </Row>
        </div>
        <DeleteModal
          // page={users.userActivePage} 
          actionFunction={deleteSubUser}
          id={userId}
          modal={deleteModal}
          setModal={setDeleteModal}
          color="danger"
          title="Delete User!"
          default
          message="Are you sure you want to delete this user? "
        />

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <>
                  <div className="listing_search">
                    <div className="topbar__right-search">
                      {/* <TableSearch setSearch={setSearch} /> */}
                    </div>
                  </div>
                  {
                    users.usersList.data  &&
                      users.usersList.data.users &&
                      users.usersList.data.users &&
                      users.usersList.data.users.length > 0 ?
                      <>
                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          size="md"
                          className="fixed"
                          style={{
                            overflow: "hidden",
                            tableLayout: "fixed",
                            textAlign: "center",
                          }}
                        >
                          <thead className="">
                            <tr>
                              <th>Username</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Birthday</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                            {users.usersList.data &&
                              users.usersList.data.users &&
                              users.usersList.data.users &&
                              users.usersList.data.users.map((user, id) => (
                                <tr>
                                  <td>{user.username}</td>
                                  {user.email && user.email.length > 17 ? (
                                    <td>{user.email.substring(0, 17)}....</td>
                                  ) : (
                                    <td>{user.email}</td>
                                  )}
 
                                  <td>{user.phoneNumber}</td>
                                  <td>
                                    {moment(user.birthDate).format("MMM Do YYYY")}
                                  </td>
                                  <td>

                                    <span className="d-inline-block"
                                      id={`detail_${id}`}
                                      style={{ marginRight: "5px" }} 
                                    >
                                      <span className="text-secondary" >
                                        <EyeIcon />
                                      </span>
                                    </span>


                                    <span className="d-inline-block"
                                      id={`Edit_${id}`}
                                      style={{ marginRight: "5px" }}
                                      onClick={() => {
                                        history.push('/edit-user');
                                        
                                      }}

                                    >
                                      <span className="text-primary" >
                                        <EditIcon />
                                      </span>

                                    </span>

                                    <span className="d-inline-block"
                                      id={`delete_${id}`}
                                      style={{ marginRight: "5px" }}
                                      onClick={() => {
                                        setDeleteModal(true);
                                        setUserId(user.id);
                                      }}
                                    >
                                      <span className="text-danger" >
                                        <DeleteIcon />
                                      </span>
                                    </span>
                                    <span className="tooltip_top">
                                      <Tooltip id="tooltip_top"
                                        placement="top"
                                        isOpen={
                                          tooltipOpenObj[`delete_${id}`] ? true : false
                                        }
                                        target={`delete_${id}`}
                                        toggle={() => toggleForToolObj1(`delete_${id}`)}
                                      >
                                        Delete User
                                </Tooltip>
                                      <Tooltip id="tooltip_top_view"
                                        placement="top"
                                        isOpen={
                                          tooltipOpenObj[`detail_${id}`] ? true : false
                                        }
                                        target={`detail_${id}`}
                                        toggle={() => toggleForToolObj1(`detail_${id}`)}
                                      >
                                        User Detail
                                </Tooltip>

                                      <Tooltip id="tooltip_top_edit"
                                        placement="top"
                                        isOpen={
                                          tooltipOpenObj[`Edit_${id}`] ? true : false
                                        }
                                        target={`Edit_${id}`}
                                        toggle={() => toggleForToolObj1(`Edit_${id}`)}
                                      >
                                        Edit User
                                </Tooltip>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>

                        <Row className="justify-content-center mt-3">
                          <Col lg="3">
                            <div className="table_pagination">
                              {/* <Pagination
                                itemClass="page-item"
                                linkClass="page-link"
                                activePage={users.userActivePage}
                                itemsCountPerPage={8}
                                totalItemsCount={
                                  users.usersList.totalPages
                                    ? users.usersList.totalPages * 8
                                    : 8
                                }
                                pageRangeDisplayed={5}
                                onChange={(pageNumber) => {
                                  dispatch(changeUserActivePage(pageNumber));
                                }}
                              /> */}
                            </div>
                          </Col>
                        </Row>
                      </>
                      :
                      <>
                        <Row>
                          <Col lg="12">
                            <h4 className="text-center mt-3">
                              No Data Available
                            </h4>
                          </Col>
                        </Row>
                      </>
                  }
                </>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SubUsersList;
