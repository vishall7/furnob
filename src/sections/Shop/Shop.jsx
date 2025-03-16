import React from 'react'
import Banner from '../../components/ShopGrid/Banner'
import CategoriesSlider from '../../components/ShopGrid/CategoriesSlider'
import ShopGrid from '../../components/ShopGrid/ShopGrid';

function Shop() {
  return (
    <>
      <Banner title='Shop'/>
      <CategoriesSlider/>
      <ShopGrid />
    </>
  )
}

export default Shop
