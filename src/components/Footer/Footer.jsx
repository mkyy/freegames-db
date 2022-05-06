import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Github from 'react-bootstrap-icons/dist/icons/github';
import Linkedin from 'react-bootstrap-icons/dist/icons/linkedin';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row lg={12} md={12} sm={12}>
          <Col className='mb-2'>
            <Row>
              <h4>MENU</h4>
            </Row>
            <Row>
              <a href='#top'>Home</a>
            </Row>
            <Row>
              <a href='/games'>Games</a>
            </Row>
            <Row>
              <a href='#lancamentos'>Lançamentos</a>
            </Row>
          </Col>
          <Col className='mb-2'>
            <Row>
              <h4>LINKS</h4>
            </Row>
            <Row>
              <a href='https://www.freetogame.com/api-doc'>API</a>
            </Row>
            <Row>
              <a href='https://mkyyspace.vercel.app'>Mkyy Space</a>
            </Row>
          </Col>
          <Col>
            <h1 style={{ textAlign: 'center', color: '#fefefe' }}>Free Games DB</h1>
          </Col>
        </Row>
        <br />
        <hr />
        <Row>
          <Col lg={12} md={12}>
            © mkyy Space( Maiky Roger ) - All rights reserved.
          </Col>
          <Col>
            <a href='https://github.com/mkyy'>
              <Github />
            </a>
            <a href='https://www.linkedin.com/in/maikyroger'>
              <Linkedin />
            </a>
          </Col>
        </Row>
      </Container>
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
