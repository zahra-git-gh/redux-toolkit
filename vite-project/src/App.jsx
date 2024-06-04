
// import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { ContainerCards } from './components/containerCards'
import { FilterCard } from './components/filterCard'
// import { LargeCard } from './components/largeCard'

function App() {
  document.body.style.backgroundColor='hsl(180, 52%, 96%)'
  // const [width, setWidth]=useState()
  // const handleResize=()=>{
  //   setWidth(window.innerWidth)
  // }
  // useEffect(()=>{
  //   window.addEventListener('resize', handleResize)
  //   return()=>window.removeEventListener('resize', handleResize)
  // }, [])
  // console.log(width);
  return (
    <>
      <Header/>
      <FilterCard/>
      <ContainerCards/>
      {/* {width<770? <SmallCard/> :<LargeCard/>} */}
    </>
  )
}

export default App
