import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getUsersList,changeUserActivePage } from "../../store/User/actions";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Users.usersList);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsersList("hey"));
  }, []);

  return (
    <React.Fragment>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4
                className="page-title"
                onClick={() => {
                  console.log(
                    "this is my user list which i had to show",
                    users
                  );
                }}
              >
                Admins
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
                          </tr>
                        ))}
                    </tbody>
                  </Table>

                  <div style={{ paddingLeft: "32%", paddingTop: "1%" }}>
                    <Pagination
                      itemClass="page-item"
                      linkClass="page-link"
                      activePage={users.userActivePage}
                      itemsCountPerPage={5}
                      totalItemsCount={
                        users.totalPages ? users.totalPages * 5 : 5
                      }
                      pageRangeDisplayed={5}
                      onChange={(pageNumber) => {
                        document.querySelector(".content-page").scrollTo(0, 0);
                        // dispatch(changeUserActivePage(pageNumber));
                      }}
                    />
                  </div>
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
