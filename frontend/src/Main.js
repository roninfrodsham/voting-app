import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DataContextProvider from './contexts/DataContext';
import APIDataContextProvider from './contexts/APIDataContext';

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
	svg {
		fill: #fff;
	}
`;

function Main() {
  return (
    <DataContextProvider>
						<APIDataContextProvider>
										<HeaderContainer>
														<div>
          <Link to="/categories">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 24">
              <path d="M59.4 11L54.5.5h-6.3l5 10.5h6.2zm-22.9 0l1.9-4.9 2.1 4.9h5.9L41.6.5h-6.7L30.7 11h5.8zM17 .5h5.8V11H17V.5zM0 .5h5.8V11H0V.5zM112 11c-3.5-2.1-8.2-2.5-8.2-4.7 0-1.2 1.3-1.9 3.4-1.9 2 0 4 .6 7.3 2.1V2a18.3 18.3 0 0 0-7.8-1.8c-5.4 0-8.8 2.6-8.8 6.6 0 1.8.5 3.1 1.4 4.2H112zm-44.1 0L72.7.5h-6.2L61.8 11h6.1zm12.9 0l1.9-4.9 2.1 4.9h5.9L85.9.5h-6.7L75 11h5.8zm-7 2.8l-4 9.8H76l3.8-9.8h-6zm12.1 0l4.1 9.8h6.2l-4.4-9.8h-5.9zm-31.3 0l4.9 10.1H62l4.6-10.1h-12zm48.9 0c3 1.2 6.1 1.8 6.1 3.7 0 1.4-1.2 2.1-3.4 2.1-2.6 0-4.6-.8-7.9-3v5c2.3 1.2 4.3 2.2 8.4 2.2 5.2 0 8.9-2.6 8.9-7 0-1.2-.3-2.3-.7-3.1-.1.1-11.4.1-11.4.1zm-86.5 0h5.8v9.8H17v-9.8zm-17 0h5.8v9.8H0v-9.8zm29.5 0l-4 9.8h6.1l3.8-9.8h-5.9zm12.1 0l4.1 9.8h6.2l-4.4-9.8h-5.9zm84-13.3v23.1h15.7v-2.4h-13.1V.5h-2.6zm29.6 0L147.4 12 139.6.4h-3.2l9.7 14v9.2h2.6v-9.2L158.4.5h-3.2zm22 0V19L162.6.5h-2.5v23.1h2.6v-19l15 19h2.1V.5h-2.6zm22 0l-7.1 9.5L185 .5h-3.1l8.6 11.3-8.9 11.8h3l7.4-9.9 7.4 9.9h3.1l-8.9-11.8L202.2.5h-3zm106 12.5V2.8h5.9c3.8 0 6.3 1.7 6.3 5v.1c0 3-2.5 5.1-6.4 5.1h-5.8zm-2.6 10.6h2.6v-8.2h5.7c5 0 9.1-2.6 9.1-7.6 0-4.6-3.5-7.4-8.7-7.4h-8.7v23.2zm-13.4.4c5.8 0 9.7-3.5 9.7-10.3V.4h-2.6v13.5c0 5.1-2.7 7.7-7 7.7-4.4 0-7.1-2.8-7.1-7.8V.4h-2.6v13.5c-.1 6.6 3.8 10.1 9.6 10.1m-23.9-2.4c-5.3 0-9.2-4.3-9.2-9.6v-.1c0-5.3 3.8-9.5 9.1-9.5s9.2 4.3 9.2 9.6v.1c0 5.2-3.8 9.5-9.1 9.5m-.1 2.4c7.1 0 11.9-5.6 11.9-12v-.1c0-6.4-4.8-11.9-11.8-11.9s-11.9 5.6-11.9 12v.1c0 6.4 4.8 11.9 11.8 11.9m-28.9-11.8V2.8h7.2c3.8 0 6 1.7 6 4.6v.1c0 3-2.5 4.8-6 4.8l-7.2-.1zm-2.6 11.4h2.6v-9h6.7l6.8 9h3.2l-7.2-9.5c3.7-.7 6.3-2.9 6.3-6.8 0-1.8-.7-3.4-1.8-4.6-1.5-1.5-3.8-2.3-6.6-2.3h-10v23.2zM221 24c3.9 0 7.2-1.6 9.3-3.5v-9.2h-9.6v2.4h7.1v5.8c-1.6 1.3-4.1 2.3-6.7 2.3-5.7 0-9.2-4.1-9.2-9.6v-.1c0-5.2 3.7-9.5 8.9-9.5 3.3 0 5.3 1.1 7.1 2.7l1.7-2c-2.3-2-4.8-3.1-8.7-3.1-7 0-11.7 5.6-11.7 12v.1c0 6.4 4.5 11.7 11.8 11.7"></path>
            </svg>
										</Link>
														</div>
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
