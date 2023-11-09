import React, { useState } from "react";
import { AuthLayout } from "./Layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { validateRegisterForm } from "../../utils/validation";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import { register } from "../../services/auth";

const initialState = {
  username: "",
  name: "",
  lastname: "",
  phone: "",
  birthdate: "",
  email: "",
  password: "",
  rPassword: "",
};

export const RegisterPage = () => {
  const [errors, setErrors] = useState(initialState);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: (newUser) => register(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User created");
      navigate("/auth/login");
    },
    onError: () => {
      toast.error("Error creating user");
    },
  });

  const isDateValid = (date) => {
    const birthdate = new Date(date);
    return !isNaN(birthdate.getTime());
  };
  const [formData, setFormData] = useState(initialState);

  const {
    username,
    name,
    lastname,
    phone,
    email,
    password,
    rPassword,
    birthdate,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(initialState);

    const newUser = {
      name: formData.name,
      lastName: formData.lastname,
      userName: formData.username,
      password: formData.password,
      email: formData.email,
      pfp: "9LcmFac.jpeg",
      birthDate: new Date(formData.birthdate).toISOString(),
      phone: formData.phone,
    };

    setErrors(validateRegisterForm(formData));
    mutate(newUser);

    if (!isDateValid(formData.birthdate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthdate: "Fecha de nacimiento no válida",
      }));
      return;
    }
  };

  return (
    <div>
      <AuthLayout title={"Register"}>
        <div className="max-w-md mx-auto">
          <form
            className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                type="text"
                placeholder="Username"
                value={username}
              />
              <span className="text-sm text-red-600 font-thin">
                {errors.username || null}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-3">
              <div className="mb-4 w-full lg:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Your name"
                />
                <span className="text-sm text-red-600 font-thin">
                  {errors.name || null}
                </span>
              </div>

              <div className="mb-4 w-full lg:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, lastname: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  value={lastname}
                  placeholder="Your lastname"
                />
                <span className="text-sm text-red-600 font-thin">
                  {errors.lastname || null}
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="number"
                  placeholder="+54 11 1234567"
                  value={phone}
                />
                <span className="text-sm text-red-600 font-thin">
                  {errors.phone || null}
                </span>
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="birthday"
                >
                  Birthdate
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, birthdate: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="birthdate"
                  type="date"
                  value={birthdate}
                />
                <span className="text-sm text-red-600 font-thin">
                  {errors.birthdate || null}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              <span className="text-sm text-red-600 font-thin">
                {errors.email || null}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-3">
              <div className="mb-6 lg:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  value={password}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="**********"
                />
                <span className="text-sm text-red-600 font-thin">
                  {errors.password || null}
                </span>
              </div>

              <div className="mb-6 lg:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="Rpassword"
                >
                  Repeat password
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, rPassword: e.target.value })
                  }
                  value={rPassword}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Rpassword"
                  type="password"
                  placeholder="**********"
                />
                <span className="text-sm text-red-600 font-thin">
                  {errors.rPassword || null}
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <Link
                className="mt-2 lg:mt-0 inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
                to={"/auth/login"}
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};
