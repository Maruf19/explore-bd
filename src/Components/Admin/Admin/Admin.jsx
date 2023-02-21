import React from "react";

const Admin = () => {
  return (
    <section>
      <div className="flex items-center mt-20 justify-center w-full text-3xl capitalize text-primary font-bold ">
        Welcome to Admin dashboard
      </div>

      <div className="mt-20">
        <div
          id="main"
          class="main-content flex-1  mt-12 md:mt-2 pb-24 md:pb-5"
        >
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="  rounded-lg shadow-2xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-green-600">
                      <i class="fa fa-wallet fa-2x fa-inverse"></i>
                    </div>
                  </div>

                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Total Payment
                    </h2>
                    <p class="font-bold text-3xl">
                      $3249{" "}
                      <span class="text-green-500">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
            <div class="  rounded-lg shadow-2xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-pink-600">
                      <i class="fas fa-users fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Total Users
                    </h2>
                    <p class="font-bold text-3xl">
                      249{" "}
                      <span class="text-pink-500">
                        <i class="fas fa-exchange-alt"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="  rounded-lg shadow-2xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-yellow-600">
                      <i class="fas fa-user-plus fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">New Users</h2>
                    <p class="font-bold text-3xl">
                      2{" "}
                      <span class="text-yellow-600">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
             <div class="  rounded-lg shadow-2xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-blue-600">
                      <i class="fas fa-server fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Server Uptime
                    </h2>
                    <p class="font-bold text-3xl">152 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
             <div class="  rounded-lg shadow-2xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-indigo-600">
                      <i class="fas fa-tasks fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      To Do List
                    </h2>
                    <p class="font-bold text-3xl">7 tasks</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
               <div class="  rounded-lg shadow-2xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-red-600">
                      <i class="fas fa-inbox fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">Issues</h2>
                    <p class="font-bold text-3xl">
                      3{" "}
                      <span class="text-red-500">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
