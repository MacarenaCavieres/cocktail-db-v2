import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import SearchPage from "./views/SearchPage";
import FavoritesPage from "./views/FavoritesPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />}>
                        <Route path="/search" element={<SearchPage />}></Route>
                        <Route path="/favorites" element={<FavoritesPage />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
