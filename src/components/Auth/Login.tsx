import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { useForm } from "react-hook-form";
//import { useRouter } from 'next/router';
import { Redirect } from "react-router-dom";

const Login = (props: any) => {
  let {isAuth, setIsAuth} = props
  const Email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  console.log("email ", Email, "password: ", password);

  const onSubmit = (data: any) => {
      console.log('submit');
      
    if (data.email == Email && data.password == password) {
        console.log('true ');
        setIsAuth(true)
       //let myURL: any = window.location;
      /*  document.location = myURL + '/dashboard' */
      //router.push("/dashboard");
     // window.location.href = '/dashboard';
     
    }
    else{
        alert('User name or password is incorrect')
    }
  };
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-64 xl:px-24">
          <div className="mx-auto w-full max-w-sm">
            <div>
              {/* <img
                className="h-12 w-auto align-centre"
                src="logo.png"
                alt="a"
              /> */}

              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 font-family-Poppins ">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        autoComplete={"off"}
                        name="email"
                        type="input"
                        /* value={loginData.email}
                        onChange={(e: any) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        } */
                        ref={register({
                          required: "Enter your e-mail",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Enter a valid e-mail address",
                          },
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm ml-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        autoComplete={"off"}
                        name="password"
                        type="text"
                        /*  value={loginData.password}
                        onChange={(e: any) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        } */
                        ref={register({
                          required: "You must specify a password",
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                          },
                        })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm justify-end ">
                        {errors.password.message}
                      </p>
                    )}
                  </div>                 
                    <div className="mt-6">
                      <span className="block w-full rounded-md shadow-sm">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-red active:bg-blue-700 transition duration-150 ease-in-out"
                        >
                          Sign in
                        </button>
                      </span>
                    </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-50 w-50 object-cover"
            src="loginScreen2.png"
            alt="aa"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
