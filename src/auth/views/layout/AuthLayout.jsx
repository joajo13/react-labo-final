import React from "react";

export const AuthLayout = ({ children, title }) => {
  const scroll = title === "Register" ? "overflow-y-auto" : "";
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-900 overflow-y-auto">
        <div className="w-full bg-slate-900 lg:bg-white lg:container lg:mx-auto lg:my-auto h-3/4 lg:rounded-2xl border border-slate-900 lg:max-w-4xl lg:overflow-hidden lg:shadow-2xl ">
          <div className="lg:grid lg:grid-cols-2 h-full">
            <div className="hidden lg:block">
              <img
                className="h-3/4 w-full object-cover "
                src="/public/Captura de pantalla 2023-11-08 172552.jpg"
                alt=""
              />
            </div>
            <div className={`${scroll} lg:bg-white mt-6 lg:mt-0`}>
              <h1 className="text-3xl font-bold text-center mb-4 lg:mb-0 lg:mt-4 text-orange-600">
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
