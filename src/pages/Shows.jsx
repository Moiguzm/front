import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Update from "./Update";

export default function Shows() {
  const { users, onlyOne, deleteUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const deleteEvents = async (id) => {
    try {
      await deleteUser(id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (component) => {
    setShowModal(true);
    onlyOne(component.id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="rounded-3xl px-6 py-4 overflow-hidden border bg-purple-700 border-gray-300 h-screen">
        <table className="w-full items-center border-separate">
          <thead>
            <tr className="bg-orange-600 rounded-xl p-8 border-separate text-white">
              <th className="py-2 px-2 text-2xl font-bold text-yellow-300">
                Producto
              </th>

              <th className="py-2 px-2 text-2xl text-red-700">Cantidad</th>
              <th className="py-2 px-2 text-2xl text-amber-500">Precio</th>
              <th className="py-2 px-2 text-2xl text-lime-500">Actualizar</th>
              <th className="py-2 px-2 text-2xl text-cyan-600">Eliminar articulo</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(users)&& users.length > 0 ? (
              users?.map((user, index) => (
                <tr key={index} className="border-b border-gray-200 text-2xl ">
                  <td className="py-2 px-2 bg-orange-600">{user?.producto}</td>
                  <td className="py-2 px-2 bg-orange-800">{user?.cantidad}</td>
                  <td className="py-2 px-2 bg-orange-600">{user?.precio}</td>
                  <td className="py-2 px-2 bg-orange-800">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => openModal(user)}
                    >
                      Actualizar
                    </button>
                  </td>
                  <td className="py-2 px-2 bg-orange-500">
                    <button
                      onClick={() => deleteEvents(user?.id)}
                      className="bg-red-500 hover:bg-red-600 items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="h-full">
                <td
                  colSpan="5"
                  className="py-6 px-6 text-center text-9xl h-full"
                >
                  No hay productos
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative">
              <div className="bg-white rounded-lg p-8">
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 -mt-8 -mr-8 p-2 rounded-full bg-white text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Update />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
