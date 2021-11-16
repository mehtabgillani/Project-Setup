import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import {
  getUsersList,
  changeUserActivePage,
  deleteUser,
} from "../../store/User/actions";
import Delete from "../../assets/icons/delete.svg";
import DeleteModal from "./components/modal";
function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Users);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getUsersList({page: users.userActivePage}));
    console.log("i am the first use effect with dependency")
  }, [users.userActivePage]);
 
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
                    users.usersList
                  );
                }}
              >
                Users
              </h4>
            </Col>
          </Row>
        </div>
        <DeleteModal
        page={users.userActivePage}
          actionFunction={deleteUser}
          id={userId}
          modal={deleteModal}
          setModal={setDeleteModal}
          color="primary"
          title="Delete User!"
          header
          message="Are you sure you want to delete this user? "
        />

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
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
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Birthday</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.usersList.data &&
                        users.usersList.data.users &&
                        users.usersList.data.users &&
                        users.usersList.data.users.map((user) => (
                          <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.birthDate}</td>
                            <td>
                              <span
                                id={`delete_${user.username}`}
                                style={{ marginRight: "5px" }}
                                onClick={() => {
                                  setDeleteModal(true);
                                  setUserId(user.id);
                                }}
                              >
                                <img style={{ height: "22px" }} src={Delete} />
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                    <Row className="justify-content-center mt-3" >
                      <Col lg="3">
                        <div className="table_pagination">
                        <Pagination
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={users.userActivePage}
                            itemsCountPerPage={8}
                            totalItemsCount={
                              users.usersList.totalPages ? users.usersList.totalPages * 8 : 8
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
      </Container>
    </React.Fragment>
  );
}

export default UserList;
