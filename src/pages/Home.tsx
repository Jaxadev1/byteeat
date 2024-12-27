import React from 'react';
import Categories from "../components/Categories";
import { Banner } from '../components/Banner';
// import ReactScroll from '../components/ReactScroll';

const Home: React.FC = () => {
  return (
    <main className="main">
        <div className="container">
          <div className="homepage-main">
            <Banner/>
            <div className="homepage-main-categories">
              <Categories />
            </div>
            {/* <ReactScroll/> */}
          </div>
        </div>
    </main>
  );
};

export default Home;
