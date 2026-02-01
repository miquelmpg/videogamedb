import { Routes, Route } from "react-router";
import { Navbar, Footer } from "./components/ui";
import { HomePage, DetailPage, SearchPage, RegisterPage, LoginPage, DashboardPage, Error404Page } from './pages';
import { SearchProviderWrapper } from "./contexts/search-context";
import { FooterProviderWrapper } from "./contexts/footer-context";
import Favorites from "./components/favorites/favorites";
import { DndContext } from "@dnd-kit/core";
import { FavoriteProviderWrapper } from "./contexts/favorite-context";
import { PrivateRoute } from './guards';

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <DndContext>
        <FavoriteProviderWrapper>
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
                      <Route path='/dashboard' element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
                      <Route  path="/404" element={<Error404Page/>} />
                    </Routes>
                </main>  
                </SearchProviderWrapper>
              <Footer/>
            </FooterProviderWrapper>
          </Favorites>
        </FavoriteProviderWrapper>
      </DndContext>
    </div>
  )
}

export default App;