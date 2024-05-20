import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await registerUser(data);
    navigate("/");
  });

  return (
    <div className="p-4 bg-purple-700 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-yellow-300">
        Registro de productos
      </h1>
      <form onSubmit={onSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="producto" className="block mb-1 text-white">
            Producto
          </label>
          <input
            type="text"
            id="producto"
            placeholder="Producto"
            name="producto"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-300"
            {...register("producto", { required: true })}
          />
          {errors.producto && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block mb-1 text-white">
            Precio
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            placeholder="Precio"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-300"
            {...register("precio", { required: true })}
          />
          {errors.precio && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="cantidad" className="block mb-1 text-white">
            Cantidad
          </label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            placeholder="Cantidad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-300"
            {...register("cantidad", { required: true })}
          />
          {errors.cantidad && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-300 text-purple-700 font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
