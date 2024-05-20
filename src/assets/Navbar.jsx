import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white ml-2 text-3xl font-semibold">Abarrotes doña Alma</span>
        </div>
        <div>
          <Link to="/register" className="text-white hover:text-yellow-300 ml-2 text-xl font-semibold">
          Agregar productos
          </Link>
        </div>
      </div>
    </nav>
  );
}
