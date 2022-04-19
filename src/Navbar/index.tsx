import * as React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { IoPersonOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import Fixed from "../Fixed";
import Flex from "../Flex";

export type eventKey = string | null;

const TopNavBar = () => {
  const [language, setLanguage] = React.useState<eventKey>("DE");
  const [currency, setCurrency] = React.useState<eventKey>("€ EUR");

  const handleLanguageChange = React.useCallback((eventKey: eventKey) => {
    setLanguage(eventKey);
  }, []);

  const handleCurrencyChange = React.useCallback((eventKey: eventKey) => {
    setCurrency(eventKey);
  }, []);

  return (
    <>
      <Navbar className="navbar-top" fixed="top">
        <Flex justify="flex-end" padding="0 20px 0 0">
          <NavDropdown
            onSelect={handleLanguageChange}
            alignRight
            title={language}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item eventKey="EN">EN</NavDropdown.Item>
            <NavDropdown.Item eventKey="ES">ES</NavDropdown.Item>
            <NavDropdown.Item eventKey="DE">DE</NavDropdown.Item>
            <NavDropdown.Item eventKey="JP">JP</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            onSelect={handleCurrencyChange}
            alignRight
            title={currency}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item eventKey="€ EUR">€ EUR</NavDropdown.Item>
            <NavDropdown.Item eventKey="£ GBP">£ GBP</NavDropdown.Item>
            <NavDropdown.Item eventKey="¥ JPY">¥ JPY</NavDropdown.Item>
            <NavDropdown.Item eventKey="$ USD">$ USD</NavDropdown.Item>
          </NavDropdown>
        </Flex>
      </Navbar>
      <Fixed background="#fff" padding="5px 60px 0 20px" top="30px">
        <Flex justify="flex-start">
          <Navbar.Brand href="/">Brand</Navbar.Brand>
        </Flex>
        <Flex justify="center">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="search-box"
            />
          </Form>
        </Flex>
        <Flex justify="flex-end">
          <Nav.Link>
            <IoPersonOutline />
          </Nav.Link>
          <Nav.Link className="pr-0">
            <GiShoppingCart />
          </Nav.Link>
        </Flex>
      </Fixed>
    </>
  );
};

export default TopNavBar;
