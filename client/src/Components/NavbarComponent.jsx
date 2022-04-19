import React, { useState, useEffect } from "react";
import {
  Collapse,Modal,ModalBody,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
// import HomeCategory from "./HomePageComponents/HomeCategoryType";

import { showCategoryMaster } from "../Util/axios";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const toggle = () => setIsOpen(!isOpen);

  // data fetching for menu using axios
  useEffect(() => {
    showCategoryMaster()
      .then((data) => {
        // console.log("Line 29 navbar", data);
        setCategoryData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Navbar light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} className="main-menubar d-none d-md-inline" navbar>
            <Nav navbar >
              <NavItem className="format-main-menubar">
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              {/* <NavItem className="format-main-menubar">
                <NavLink href="/blog">All Feeds</NavLink>
              </NavItem> */}
              <UncontrolledDropdown
                nav
                inNavbar
                className="format-main-menubar"
              >
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  {categoryData.map((data) => {
                    return (
                      <DropdownItem
                        href={"/category/" + data.slug}
                        key={data.categoryId}
                      >
                        {data.categoryValue}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              {categoryData.map((data) => {
                return (
                  <NavItem
                    className="format-main-menubar"
                    key={data.categoryId}
                  >
                    <NavLink href={"/home#" + data.categoryValue}>
                      {data.categoryValue}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal  id="myModal"  isOpen={isOpen} toggle={toggle}  className=" modal-dialog modal-dialog-centered" navbar>
          <ModalBody >
          <Nav navbar>
              <NavItem className="format-main-menubar">
                <NavLink  className="text-decoration-none" href="/home">Home</NavLink>
              </NavItem>
              {/* <NavItem className="format-main-menubar">
                <NavLink href="/blog">All Feeds</NavLink>
              </NavItem> */}
              <UncontrolledDropdown
                nav
                inNavbar
                className="format-main-menubar"
              >
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  {categoryData.map((data) => {
                    return (
                      <DropdownItem
                        href={"/category/" + data.slug}
                        key={data.categoryId}
                      >
                        {data.categoryValue}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              {categoryData.map((data) => {
                return (
                  <NavItem
                    className="format-main-menubar"
                    key={data.categoryId}
                  >
                    <NavLink href={"/home#" + data.categoryValue}>
                      {data.categoryValue}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </ModalBody>
          </Modal>
    </React.Fragment>
  );
};

export default NavbarComponent;
