import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";
const IndexPage = lazy(() => import("./views/IndexPage"));
const SearchPage = lazy(() => import("./views/SearchPage"));
const FavoritesPage = lazy(() => import("./views/FavoritesPage"));

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback="Loading...">
                                <IndexPage />
                            </Suspense>
                        }
                        index
                    ></Route>
                    <Route
                        path="/search"
                        element={
                            <Suspense fallback="Loading...">
                                <SearchPage />
                            </Suspense>
                        }
                    ></Route>
                    <Route
                        path="/favorites"
                        element={
                            <Suspense fallback="Loading...">
                                <SearchPage />
                                <FavoritesPage />
                            </Suspense>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
