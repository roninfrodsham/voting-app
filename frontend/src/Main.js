import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DataContextProvider from './contexts/DataContext';
import APIDataContextProvider from './contexts/APIDataContext';

import logo from './assets/logo.svg';

const Home = React.lazy(() => import('./components/Home'));
const Categories = React.lazy(() => import('./components/Categories'));
const Category = React.lazy(() => import('./components/Category'));
const Submission = React.lazy(() => import('./components/Submission'));
const Results = React.lazy(() => import('./components/Results'));
const Result = React.lazy(() => import('./components/Result'));

const HeaderContainer = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  height: 61px;
  width: 100%;
  background: #dc002e;
  div {
    padding: 20px 66px;
  }
	img {
		margin: 18px 0 0 20px;
    height: 24px;
  }
`;

function Main() {
  return (
    <DataContextProvider>
      <APIDataContextProvider>
        <HeaderContainer>
          <Link to="/categories">
            <img src={logo} />
          </Link>
        </HeaderContainer>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/result" component={Result} />
            </Switch>
          </Suspense>
        </div>
      </APIDataContextProvider>
    </DataContextProvider>
  );
}

export default Main;
