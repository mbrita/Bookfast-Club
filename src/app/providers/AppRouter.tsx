import { Main } from '@/pages/Main';
import { routes } from '@/shared/config';
import { Layout } from '@/widgets/layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main} element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.main} />} />
      </Routes>
    </BrowserRouter>
  );
};
