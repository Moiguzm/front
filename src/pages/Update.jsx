import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

export default function Update() {
  const { updateUser, user } = useAuth();
  const [cantidad, setCantidad] = useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("producto", user.producto);
      setValue("precio", user.precio);
      setValue("cantidad", user.cantidad);
      setCantidad(user.cantidad);
    }
  }, [user, setValue]);

  const incrementCantidad = (e) => {
    e.preventDefault();
    setCantidad(cantidad + 1);
  };

  const decrementCantidad = (e) => {
    if (cantidad > 1) {
      e.preventDefault();
      setCantidad(cantidad - 1);
    }
  };

  const onSubmit = async (data) => {
    try {
      const updatedData = {
        ...data,
        cantidad: cantidad 
      };
      await updateUser(user?.id, updatedData);
      window.location.reload();
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Actualizar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="mb-4">
          <label className="block mb-2">Ingrese el Producto</label>
          <input
            type="text"
            id="producto"
            name="producto"
            {...register("producto", { required: true })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.producto ? "border-red-500" : ""
            }`}
          />
          {errors.producto && (
            <span className="text-red-500">El producto es obligatorio.</span>
          )}

          <label className="block mb-2">Ingrese la cantidad</label>
          <span className=" mb-2 text-lg font-bold">Cantidad: {cantidad}</span>
          <input
            type="hidden"
            id="cantidad"
            name="cantidad"
            value={cantidad}
            {...register("cantidad", { required: true })}
          />
          {errors.cantidad && (
            <span className="text-red-500">La cantidad es obligatoria.</span>
          )}
          {errors.cantidad && (
            <span className="text-red-500">El cantidad es obligatorio.</span>
          )}
          <div className="flex justify-center">
            <button
              onClick={decrementCantidad}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              -
            </button>
            <button
              onClick={incrementCantidad}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              +
            </button>
          </div>
          <label className="block mb-2">Ingrese el precio</label>
          <input
            type="number"
            id="precio"
            name="precio"
            {...register("precio", { required: true })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.precio ? "border-red-500" : ""
            }`}
          />
          {errors.precio && (
            <span className="text-red-500">El precio es obligatorio.</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}
