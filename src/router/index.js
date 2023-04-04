import { Route, Routes } from "react-router-dom";
import Home from '../pages/home/home';
import LatestNews from '../pages/latest-news/latest-news';
import PopularNews from '../pages/popular-news/popular-news';


export const MainRouter = () => {
  return (
    <Routes path='/'>
      <Route index element={<Home />} />
      <Route path="/latest-news" element={<LatestNews />} />
      <Route path='/popular-news' element={<PopularNews />} />
    </Routes>
  )
}