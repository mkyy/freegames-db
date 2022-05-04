import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../MainPage/';

export const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
