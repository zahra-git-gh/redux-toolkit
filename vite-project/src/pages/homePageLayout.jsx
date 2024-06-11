
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";


export function HomePageLayout(){
   document.body.style.backgroundColor = "hsl(180, 52%, 96%)";
   return <>
      <Header />
      <Outlet/>
    </>
}