import { Route, Routes } from 'react-router-dom';
import useRoutes from './hooks/useRoute';

function App() {

  const routes = useRoutes();

  return (
    <main>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              exact
              path={route.path}
              element={route.component}
              key={`route-${i}`}
            ></Route>
          )
        })
        }
      </Routes>
    </main>
  );
}

export default App;
