import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Github from 'react-bootstrap-icons/dist/icons/github';
import Linkedin from 'react-bootstrap-icons/dist/icons/linkedin';

export const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Row>
          <Col>
            <h4>MENU</h4>
            <Row>
              <a>Link</a>
            </Row>
            <Row>
              <a href=''>Link</a>
            </Row>
            <Row>
              <a>Link</a>
            </Row>
          </Col>
          <Col>
            <h4>LINKS</h4>
            <a href='https://www.freetogame.com/api-doc'>API</a>
          </Col>
          <Col>
            <h1 style={{ textAlign: 'center' }}>Free Games DB</h1>
          </Col>
        </Row>
        <br />
        <hr />
        <Row>
          <Col lg={12} md={12}>
            © mkyy Space( Maiky Roger ) - All rights reserved.
          </Col>
          <Col>
            <a href='github.com/mkyy'>
              <Github />
            </a>
            <a href='https://www.linkedin.com/in/maikyroger'>
              <Linkedin />
            </a>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #1c1e22;
  margin-top: 50px;
  border-top: 1px solid #131313;
  padding-top: 30px;
  padding-bottom: 10px;

  div {
    width: 80%;
    margin-inline: auto;
  }

  a {
    text-decoration: none;
    color: #aaaaaa;
    margin-right: 10px;

    &:hover {
      color: var(--grey);
    }
  }
`;
