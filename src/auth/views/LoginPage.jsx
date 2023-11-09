import { useContext, useState } from "react";
import { AuthLayout } from "./Layout/AuthLayout";
import { AuthContext } from "../../context/AuthContext";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { checkIfIsEmailOrUsername } from "../../utils/checkEmailOrUsername";
import { login } from "../../services/auth";
import { Loader } from "../components/Loader";
import { validateLoginForm } from "../../utils/validation";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (credentials) => login(credentials),
    onSuccess: (data) => {
      handleLogin(data);
      toast.success("Login successful");
      console.log(data);
    },
    onError: () => {
      toast.error("Login failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      username: "",
      password: "",
    });
    const field = checkIfIsEmailOrUsername(username);
    const credentials = {
      [field]: username,
      password,
    };

    setErrors(validateLoginForm(credentials));
    mutate(credentials);
  };

  return (
    <div>
      <AuthLayout title={"Login"}>
        {isPending && <Loader />}
        <div className="max-w-md mx-auto lg:h-full">
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
                type="text"
                placeholder="Username or email"
                value={username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <span className="text-sm text-red-600 font-thin">
                {errors.username || null}
              </span>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span className="text-sm text-red-600 font-thin">
                {errors.password || null}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
                to={"/auth/register"}
              >
                Create account?
              </Link>
            </div>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};
