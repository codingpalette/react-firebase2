import React, { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('../containers/HomePage'));

function Home() {
  return (
    <Suspense fallback={<div></div>}>
      <main>
        <HomePage></HomePage>
      </main>
    </Suspense>
  );
}

export default Home;
