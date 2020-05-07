import React, { Suspense, lazy } from 'react';
import Header from '../components/common/Header';
const HomePage = lazy(() => import('../containers/HomePage'));

function Home() {
  return (
    <Suspense fallback={<Header />}>
      <Header />
      <main>
        <HomePage></HomePage>
      </main>
    </Suspense>
  );
}

export default Home;
