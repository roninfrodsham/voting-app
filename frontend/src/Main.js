import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import DataContextProvider from './contexts/DataContext';
import APIDataContextProvider from './contexts/APIDataContext';

const Categories = React.lazy(() => import('./components/Categories'));
const Category = React.lazy(() => import('./components/Category'));
const Submission = React.lazy(() => import('./components/Submission'));

function Main() {
  return (
    <DataContextProvider>
      <APIDataContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/submission" component={Submission} />
          </Switch>
        </Suspense>
      </APIDataContextProvider>
    </DataContextProvider>
  );
}

export default Main;
