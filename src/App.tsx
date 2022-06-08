import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from '@/components/routes/appRoutes/AppRoutes';

function App() {
  return (
    <div className='app'>
      <div className='container-fluid p-0'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
