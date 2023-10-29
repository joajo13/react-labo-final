import React from "react";

export const AuthLayout = ({ children, title }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-900">
        <div className="container mx-auto my-auto h-3/4 rounded-2xl border border-slate-900 max-w-4xl overflow-hidden shadow-2xl bg-white">
          <div className="grid grid-cols-2">
            <div className="">
              <img
                className="h-3/4 w-full object-cover"
                src="https://i.imgur.com/HJH7tzy.jpeg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-center mt-8 text-orange-600">
                {title}
              </h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
