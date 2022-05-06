import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/';

export const GamesPage = () => {
  const [data, setData] = useState([]);
  const [dataToRender, setDataToRender] = useState([]);
  const sortRef = useRef();
  const footerRef = useRef();
  const [gamesLoaded, setGamesLoaded] = useState(30);

  async function getData() {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { 'sort-by': sortRef.current.value },
      headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '1543d168camshc90b78e628d36a6p10a610jsn391ad02e5778',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setDataToRender(response.data.filter((_, idx) => idx < 15));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  window.addEventListener('scroll', () => {
    const windowTop = window.innerHeight;
    if (windowTop > footerRef.current.getBoundingClientRect().top) {
      let arrayToRender = data.filter((_, idx) => idx < gamesLoaded);
      setDataToRender(arrayToRender);
      setGamesLoaded(gamesLoaded + 15);
    }
  });

  const renderPrincipals = () => {
    let randomPrincipalGames = [];
    for (let i = 0; i < 3; i++) {
      randomPrincipalGames.push(Math.floor(Math.random() * data.length));
    }

    const principalGames = data.filter((game, index) => {
      for (let i = 0; i < 3; i++) {
        if (index === randomPrincipalGames[i]) return game;
      }
    });

    return principalGames.map(game => (
      <Col key={game.id} sm={12} md={4} lg={4}>
        <a className='link' href={game.game_url}>
          <Card className='mb-4 shadow grow bg-dark'>
            <Card.Img src={game.thumbnail} />
          </Card>
        </a>
      </Col>
    ));
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className='pt-3'>Os Melhores Jogos para PC e Navegador de 2022!</h2>
        <p className='mb-3'>{data.length} jogos encontrado na nossa lista.</p>
        <Row>{data.length && renderPrincipals()}</Row>

        <Row lg={4} md={4}>
          <Col>
            <Form.Select
              defaultValue={'popularity'}
              className='mb-4'
              size='sm'
              ref={sortRef}
              onChange={getData}
            >
              <option value={'relevance'}>Relevancia</option>
              <option value={'release-date'}>Data de lançamento</option>
              <option value={'alphabetical'}>Ordem alfabetica</option>
              <option value={'popularity'}>Popularidade</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {dataToRender.length &&
            dataToRender.map(game => (
              <Col key={game.id} sm={12} md={3} lg={3}>
                <a className='link' href={game.game_url}>
                  <Card className='shadow grow bg-dark mb-4'>
                    <Card.Img src={game.thumbnail} />
                    <Card.Body>
                      <Card.Title>
                        <p className='c-limit'>{game.title}</p>
                        <span className='float-right badge'>Free</span>
                      </Card.Title>
                      <Card.Text>
                        <p className='c-limit'>{game.short_description}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
        </Row>
      </Container>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};
