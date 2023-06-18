import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import StartPage from 'pages/startPage/startPage';

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<StartPage />} />
      </Routes>
    </>
  );
};
