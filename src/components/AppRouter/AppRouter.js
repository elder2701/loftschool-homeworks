// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React from 'react';
import ShowPage from '../ShowPage';
import Search from '../Search';
import { Route } from 'react-router-dom';

const AppRouter = () => (
  <div className="App">
    <Route exact path="/" component={Search} />
    <Route path="/show/:id" component={ShowPage} />
  </div>
);

export default AppRouter;
