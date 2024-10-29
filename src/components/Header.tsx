import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();

    const isHome = useMemo(
        () => (pathname === "/" ? "Welcome to Cocktail DB" : pathname === "/search" ? "Search" : "Favorites"),
        [pathname]
    );

    return (
        <header className="bg-header bg-position-header bg-cover py-32">
            <div className="flex justify-around items-center">
                <img src="./logo.svg" alt="Logo cocktail" className="w-20 md:w-32" />
                <nav className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? " text-tertiary bg-black bg-opacity-50 md:bg-none font-bold text-lg md:text-xl"
                                : "text-quaternary bg-black bg-opacity-50 md:bg-none font-bold text-lg md:text-xl"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive
                                ? "text-tertiary bg-black bg-opacity-50 md:bg-none font-bold text-lg md:text-xl"
                                : "text-quaternary bg-black bg-opacity-50 md:bg-none font-bold text-lg md:text-xl"
                        }
                    >
                        Search
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            isActive
                                ? "text-tertiary bg-black bg-opacity-50 md:bg-none font-bold text-lg md:text-xl"
                                : "text-quaternary bg-black bg-opacity-50 md:bg-none font-bold text-lg md:text-xl"
                        }
                    >
                        Favorites
                    </NavLink>
                </nav>
            </div>
            <div className="pt-20">
                <h1 className="text-center font-extrabold text-5xl md:text-6xl text-quaternary bg-black bg-opacity-50">
                    {isHome}
                </h1>
            </div>
        </header>
    );
}
