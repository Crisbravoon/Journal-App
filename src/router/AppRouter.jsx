
import { Navigate, Route, Routes } from 'react-router-dom';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks';
import { CheckingAuth } from '../ui';


export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  };

  return (

    <Routes>
      {//Tambien ayuda a protección de rutas priv y publicas.
        (status === 'authenticated')
          ? <Route path='/*' element={<JournalRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to='/auth/login' />} />

    </Routes>
  )
};
