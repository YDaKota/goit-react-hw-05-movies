
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MovieDetails from  '../pages/MovieDetails/MovieDetails';

const Layout = lazy(() =>
  import('./Layout').then(module => ({
    ...module,
    default: module.Layout,
  }))
);

const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

// const MovieDetails = lazy(() =>
//   import('../pages/MovieDetails/MovieDetails').then(module => ({
//     ...module,
//     default: module.MovieDetails,
//   }))
// );

const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Review/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);
// const NotFound = lazy(() =>
//   import('../pages/NotFound/NotFound').then(module => ({
//     ...module,
//     default: module.NotFound,
//   }))
// );

export const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  );
};