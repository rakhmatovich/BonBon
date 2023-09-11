import React from 'react';
import Layout from '../Components/Layout';
import Products from '../components/Products';
import WallpaperCarousel from '../Components/WallpaperCarousel';

const Landing = () => {

  return (
    <Layout>
      <WallpaperCarousel>
        <div className={`flex items-center justify-center select-none w-full h-full bg-[url('/pizza.jpg')] bg-center bg-cover`}></div>
        <div className={`flex items-center justify-center select-none w-full h-full bg-[url('/salat.jpg')] bg-center bg-cover`}></div>
        <div className={`flex items-center justify-center select-none w-full h-full bg-[url('/soup.jpg')] bg-center bg-cover`}></div>
        <div className={`flex items-center justify-center select-none w-full h-full bg-[url('/waffles.jpg')] bg-center bg-cover`}></div>
      </WallpaperCarousel>
      <div>
        <h1 className='text-3xl text-center my-10'>Most Popular</h1>
        <Products />
      </div>
    </Layout>
  );
};

export default Landing;