import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getUsersList, changeUserActivePage } from "../../store/User/actions";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Users.usersList);
  const activePage = useSelector((state) => state.Users.userActivePage);
  const history = useHistory();

  useEffect(() => {
    dispatch(
      getUsersList({
        page: activePage,
      })
    );
  }, [activePage]);

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
                    users
                  );
                }}
              >
                Users
              </h4>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <>
                  <Table
                    responsive
                    hover
                    className="fixed"
                    style={{
                      overflow: "hidden",
                      tableLayout: "fixed",
                      textAlign: "center",
                    }}
                  >
                    <thead className="thead-light">
                      <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Birthday</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.data &&
                        users.data.users &&
                        users.data.users &&
                        users.data.users.map((user) => (
                          <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.birthDate}</td>
                            <td>
                              <Button>delete</Button>{" "}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                    <Row className="justify-content-center mt-2" >
                      <Col lg="3">
                        <div className="table_pagination">
                          <Pagination
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={activePage}
                            itemsCountPerPage={5}
                            totalItemsCount={
                              users.totalPages ? users.totalPages * 5 : 5
                            }
                            pageRangeDisplayed={5}
                            onChange={(pageNumber) => {
                              dispatch(changeUserActivePage(pageNumber));
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                </>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* <Modal isOpen={openModal} toggle={() => toggleDeleteModal(null)}>
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myModalLabel">
              Confirm!
            </h5>
            <button
              type="button"
              onClick={() => toggleDeleteModal(null)}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ModalBody>
            <p>Are you sure you want to delete this admin permanently?</p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => toggleDeleteModal(null)}
              className="waves-effect"
            >
              Cancel
            </Button>
            <Button
              type="button"
              color="danger"
              onClick={() => deleteSelectedUser(userId)}
              className="waves-effect waves-light"
            >
              Confirm
            </Button>
          </ModalFooter>
        </Modal> */}
      </Container>
    </React.Fragment>
  );
}

export default UserList;
