import React from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';
import Menu from './components/header/Menu';
import NotFoundPage from './components/NotFoundPage';
import routes from "./routes";
require("bootstrap")

const App: React.FC = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <Menu />
      {routeResult || <NotFoundPage />}
    </div>
  );
}

export default App;
