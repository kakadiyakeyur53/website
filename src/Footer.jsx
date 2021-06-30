import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  padding: 40px 45px;
  background: black;
  position: absolute;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <>
    <div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto">
    <div className="footer">
      <Box>
        <h1 className="text-center" style={{ color: "red" }}>
          thanks for using our services
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>Services</Heading>
              <FooterLink>
                <NavLink to="/home" style={{ color: "#fff" }}>
                  Home
                </NavLink>
              </FooterLink>
              <FooterLink>
                <NavLink to="/table" style={{ color: "#fff" }}>
                  Table
                </NavLink>
              </FooterLink>
              <FooterLink>
                <NavLink to="/learning" style={{ color: "#fff" }}>
                  Learning
                </NavLink>
              </FooterLink>
              <FooterLink>
                <NavLink to="/cources" style={{ color: "#fff" }}>
                  Cources
                </NavLink>
              </FooterLink>
              <FooterLink>
                <NavLink to="/examples" style={{ color: "#fff" }}>
                  Examples
                </NavLink>
              </FooterLink>
              <FooterLink>
                <NavLink to="/review" style={{ color: "#fff" }}>
                  Review
                </NavLink>
              </FooterLink>
            </Column>
            <Column>
              <Heading>Others</Heading>
              <FooterLink href="#">pdf</FooterLink>
              <FooterLink href="#">transfer</FooterLink>
              <FooterLink href="#">other</FooterLink>
              <FooterLink href="#">projects</FooterLink>
            </Column>
            <Column>
              <Heading>Learn</Heading>
              <FooterLink href="#">abc</FooterLink>
              <FooterLink href="#">def</FooterLink>
              <FooterLink href="#">ghi</FooterLink>
              <FooterLink href="#">jkl</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink>
                <a href="facebook.com">
                  <span style={{ marginLeft: "10px",color: "#fff" }}>Facebook</span>
                </a>
              </FooterLink>
              <FooterLink href="#">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
              </FooterLink>
              <FooterLink href="#">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
              </FooterLink>
              <FooterLink href="#">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};
export default Footer;
