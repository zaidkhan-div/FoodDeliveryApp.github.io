import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExplorMenu/Exploremenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/AppDownload/Appdownload'
const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Appdownload />
    </div>
  )
}

export default Home
