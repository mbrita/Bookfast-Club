import { Main } from '@/pages/Main';
import { routes } from '@/shared/const/routes';
import { Layout } from '@/widget/layout';
import { BrowserRouter, Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.Main} element={<Layout />} />
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
