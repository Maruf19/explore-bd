import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MakeAdmin = () => {

  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password, data.role)
      .then((result) => {
        alert("Successfully User Created");

        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            savedUsertoDb(data.name, data.email, data.role);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const savedUsertoDb = (name, email, role) => {
    const user = {
      name,
      email,
      role,
    };

    if (role === "admin") {
      fetch("https://explore-bd-server-ahm-rubayed.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Successfully created new admin");
            reset();
          }
        });
    }

    if (role === "editor") {
      fetch("https://explore-bd-server-ahm-rubayed.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Successfully created new editor");
            reset();
          }
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className=" pt-24  px-48">
          <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className=" w-full">
              <div>
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl  text-[#0073a8]">
                    REGISTER
                  </h1>
                  <p>Enter your information to register</p>
                </div>
                <div>
                  <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="w-full"
                  >
                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label for="" className="text-xs font-semibold px-1">
                          First name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="text"
                            {...register("name", {
                              required: "Please provided your name",
                            })}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label for="" className="text-xs font-semibold px-1">
                          Last name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="text"
                            {...register("lastName", {
                              required: "Please provided your name",
                            })}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label for="" className="text-xs font-semibold px-1">
                          Email
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="email"
                            {...register("email", {
                              required: "Please provided your name",
                            })}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="johnsmith@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-12">
                        <label for="" className="text-xs font-semibold px-1">
                          Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="password"
                            {...register("password", {
                              required: "Please provided your name",
                            })}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>

                        <div>
                          <select
                            className=" mt-5 w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            {...register("role", {
                              required: true,
                            })}
                          >
                            <option selected value="admin">
                              Admin{" "}
                            </option>
                            <option selected value="editor">
                              Editor{" "}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <input
                          type="submit"
                          value="Register"
                          className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold cursor-pointer"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
