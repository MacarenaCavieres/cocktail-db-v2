import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Modal() {
    const modal = useAppStore((state) => state.modal);
    const selectedDrink = useAppStore((state) => state.selectedDrink);
    const closeModal = useAppStore((state) => state.closeModal);

    console.log(selectedDrink);
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel
                                    className="relative transform overflow-hidden rounded-lg backdrop-blur-lg bg-modal 
                                bg-opacity-15 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
                                >
                                    <DialogTitle
                                        as="h3"
                                        className="text-white text-4xl font-extrabold my-5 text-center"
                                    >
                                        {selectedDrink.strDrink}
                                        <div className="mt-5">
                                            <img
                                                src={selectedDrink.strDrinkThumb}
                                                alt={`Imagen de ${selectedDrink.strDrink}`}
                                                className="mx-auto w-96"
                                            />
                                        </div>
                                    </DialogTitle>
                                    <DialogTitle as="h3" className="text-white text-2xl font-extrabold my-5">
                                        Ingredients
                                    </DialogTitle>
                                    <DialogTitle as="h3" className="text-white text-2xl font-extrabold my-3">
                                        Instructions
                                    </DialogTitle>
                                    <p className="text-lg text-white">{selectedDrink.strInstructions}</p>
                                    <div className="mt-5 flex justify-between gap-4">
                                        <button
                                            type="button"
                                            className="w-full bg-primary p-3 font-bold uppercase text-white shadow hover:bg-black"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full bg-secondary p-3 font-bold uppercase text-white shadow hover:bg-lime-900"
                                            onClick={closeModal}
                                        >
                                            Add to favorites
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
