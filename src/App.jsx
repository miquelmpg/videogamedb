import { Routes, Route } from "react-router";
import { Navbar, Footer } from "./components/ui";
import { HomePage, DetailPage, SearchPage, RegisterPage, LoginPage, DashboardPage } from './pages';
import { SearchProviderWrapper } from "./contexts/search-context";
import { FooterProviderWrapper } from "./contexts/footer-context";
import Favorites from "./components/favorites/favorites";
import './App.css';
import { DndContext } from "@dnd-kit/core";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <DndContext>
      <Favorites>
        <FooterProviderWrapper>
          <SearchProviderWrapper>
            <Navbar/>
            <main className="flex-fill">
                <Routes>
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/games/:id' element={<DetailPage/>} />
                  <Route path='/search' element={<SearchPage/>} />
                  <Route path='/register' element={<RegisterPage/>} />
                  <Route path='/login' element={<LoginPage/>} />
                  <Route path='/dashboard' element={<DashboardPage/>} />
                </Routes>
            </main>  
            </SearchProviderWrapper>
          {/* <Footer/> */}
        </FooterProviderWrapper>
      </Favorites></DndContext>
    </div>
  )
}

export default App;