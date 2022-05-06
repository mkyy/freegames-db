import { WelcomeContainer, WelcomeWrapper } from './style';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeWrapper>
        <h2>
          Encontre os melhores jogos <span>free-to-play</span> aqui!
        </h2>
        <p>
          Para todos amantes de jogos, encontre os mais ultimos lançamentos e os mais jogados da
          atualidade!
        </p>
        <div className='btns'>
          <Button variant='success' href='#lancamentos' size='lg' className='m-2'>
            Ultimos lançamentos
          </Button>
          <Button size='lg' variant='outline-secondary'>
            <Link className='link' to={'/games'}>
              Todos os jogos
            </Link>
          </Button>
        </div>
      </WelcomeWrapper>
    </WelcomeContainer>
  );
};
