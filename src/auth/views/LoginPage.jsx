import React from "react";
import { AuthLayout } from "./Layout/AuthLayout";

export const LoginPage = () => {
  return (
    <div>
      <AuthLayout title={"Login"}>
        <div className="h-full">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
                placeholder="Username"
              />
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
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
                href="#"
              >
                Create account?
              </a>
            </div>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};
