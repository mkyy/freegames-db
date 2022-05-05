import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 100%;
  background-color: #1c1e22;

  height: 283px;
  border-bottom: 1px solid #131313;
  border-top: 1px solid #131313;

  margin-bottom: 30px;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1024px;
  height: 283px;
  margin-inline: auto;
  background-size: cover;
  background-image: url(paladins.png);

  span {
    color: #23cf5c;
  }

  @media (max-width: 425px) {
    width: 100%;

    .btns {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    h2 {
      text-align: center;
      padding: 0 30px;
    }

    p {
      padding: 0 10px;
    }
  }
`;
