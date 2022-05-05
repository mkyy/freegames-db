import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { Header } from '../../components/Header/';
import { Welcome } from '../../components/Welcome/';
import styled from 'styled-components';

import ChevronRight from 'react-bootstrap-icons/dist/icons/chevron-right';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { recentGet } from '../../services/GetRecents';
import { topsGet } from '../../services/GetTops';
import { Footer } from '../../components/Footer/';

export const MainPage = () => {
  const [recentData, setRecentData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function setFalse() {
      setLoading(false);
    }

    async function startData() {
      setTopData(await topsGet());
      setRecentData(await recentGet({ setFalse }));
    }

    startData();
  }, []);

  const renderPrincipals = () => {
    let randomPrincipalGames = [];
    for (let i = 0; i < 3; i++) {
      randomPrincipalGames.push(Math.floor(Math.random() * recentData.length));
    }

    const principalGames = recentData.filter((game, index) => {
      for (let i = 0; i < 3; i++) {
        if (index === randomPrincipalGames[i]) return game;
      }
    });

    return principalGames.map(game => (
      <Col key={game.id} sm={12} md={4} lg={4}>
        <a className='link' href={game.game_url}>
          <Card className='shadow grow bg-dark mb-4'>
            <Card.Img src={game.thumbnail} />
            <Card.Body>
              <Card.Title>
                <p className='c-limit'>{game.title}</p>
                <span className='float-right badge'>Free</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
    ));
  };

  const renderLastRelease = () => {
    let arrayLastReleases = [];
    for (let i = 0; i < 10; i++) {
      arrayLastReleases.push(recentData[i]);
    }

    return arrayLastReleases.map(game => (
      <a key={game.id} className='link' href={game.game_url}>
        <Card className='shadow grow bg-dark mb-3'>
          <Card.Body>
            <Row>
              <Col>
                <Card.Img src={game.thumbnail} />
              </Col>
              <Col xs={9}>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>
                  <p className='c-limit'>{game.short_description}</p>
                  <span className='badge float-right'>Free</span>
                  <br />
                  <span className='badge-genre'>{game.genre}</span>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </a>
    ));
  };

  const renderTops = () => {
    return topData.map(game => (
      <a key={game.id} className='link' href={game.game_url}>
        <Card className='mb-4 grow bg-dark'>
          <Card.Img src={game.thumbnail} />
        </Card>
      </a>
    ));
  };

  return (
    <>
      <Header id='top' />
      <Welcome />
      <Container>
        <Row>{loading ? <Load /> : renderPrincipals()}</Row>
        <br />
        <br />
        <Row>
          <Col id='lancamentos' lg={8}>
            <h3 style={{ marginBottom: '30px' }}>Ultimos lançamentos</h3>
            {loading ? <Load /> : renderLastRelease()}
            <Button variant='outline-secondary' className=' btn btn-default float-right py-2 pt-1'>
              Mais Jogos <ChevronRight />
            </Button>
          </Col>
          <Col lg={4}>
            <h3 style={{ marginBottom: '30px' }}>Mais jogados</h3>
            {loading ? <Load /> : renderTops()}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

const Load = styled.div`
  width: 100px;
  height: 100px;
  border: 25px solid #fff;
  border-left-color: #0ac5d4;
  border-radius: 50%;
  animation-name: loading;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
