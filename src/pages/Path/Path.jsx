import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GamesPage } from '../GamesPage/GamesPage';
import { MainPage } from '../MainPage/';

export const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/games' element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
