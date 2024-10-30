import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";
import Footer from "../components/Footer";

export default function Layout() {
    const loadFromStorage = useAppStore((state) => state.loadFromStorage);

    useEffect(() => {
        loadFromStorage();
    }, []);

    return (
        <>
            <Header />
            <main className="flex justify-center py-16 mx-6 mb-24">
                <Outlet />
            </main>

            <Modal />

            <Notification />

            <Footer />
        </>
    );
}
