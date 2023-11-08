import React from "react";

export const RightPanel = () => {
  return (
    <aside className="w-[15vw] h-sidebar absolute lg:fixed right-0 min-h-screen">
      <div className="hidden lg:block mt-3 mr-3">
        <div className="border rounded-lg h-80 bg-white p-4">
          <h1>User info</h1>
        </div>
      </div>
    </aside>
  );
};
