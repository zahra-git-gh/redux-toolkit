import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { HomePageLayout } from "./pages/homePageLayout";
import { HomePage } from "./components/homePage";
import { DetailsJob } from "./components/detailsJob";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePageLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path=":id" element={<DetailsJob/>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}>
  </RouterProvider>
}

export default App;
