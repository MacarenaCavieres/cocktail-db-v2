import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";

const IndexPage = lazy(() => import("./views/IndexPage"));
const SearchPage = lazy(() => import("./views/SearchPage"));
const FavoritesPage = lazy(() => import("./views/FavoritesPage"));
const GenerateAIPage = lazy(() => import("./views/GenerateAIPage"));

function AppRouter() {
    return (
        <Router>
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
                                <FavoritesPage />
                            </Suspense>
                        }
                    ></Route>
                    <Route
                        path="/generate-ai"
                        element={
                            <Suspense fallback="Loading...">
                                <GenerateAIPage />
                            </Suspense>
                        }
                    ></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
