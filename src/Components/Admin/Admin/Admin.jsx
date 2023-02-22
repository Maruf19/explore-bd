import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Admin = () => {
  const [countOn, setCountOn] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `https://nerd-academy-server.vercel.app/all-users`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(users?.length)

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
                      <ScrollTrigger
                        onEnter={() => setCountOn(true)}
                        onExit={() => setCountOn(false)}>
                        <div>
                          <h1 class="font-bold text-3xl">
                            {countOn && (
                              <CountUp
                                start={0}
                                end={users.length}
                                duration={1.3}
                                delay={0}
                              ></CountUp>
                            )}
                          </h1>
                          <span class="text-pink-500">
                        <i class="fas fa-exchange-alt"></i>
                      </span>
                        </div>
                      </ScrollTrigger>
                      
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
