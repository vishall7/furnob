import React from "react";
function ErrorBox() {
  return (
    <div className="bg-primary flex h-screen w-full items-center justify-center">
      <div className="flex h-50 w-80 flex-col items-center justify-center gap-2 rounded-2xl bg-white shadow-2xl">
        <h3 className="text-lg text-black">
          Server is off please try again later
        </h3>
      </div>
    </div>
  );
}

export default ErrorBox;
