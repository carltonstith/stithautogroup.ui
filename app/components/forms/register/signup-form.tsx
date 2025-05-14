"use client"
// import Link from "next/link"
// import { useActionState, useState } from "react"
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function SignupForm() {
    const { register, handleSubmit,getValues } = useForm();

    const onSubmit = (data:any) => {
        // console.log("data", data)
        // const user = [];
        // user.push(data);
        // console.log("user", user)
        // localStorage.setItem("user", JSON.stringify([user]))
        // console.log("user", user)
        const user = getValues();

        if(localStorage.getItem("users")) {
            const users: any = JSON.parse(localStorage.getItem("users") || "[]");
            const allUsers = [...users, user];
            localStorage.setItem("users", JSON.stringify(allUsers))
        } else {
            localStorage.setItem("users", JSON.stringify([user]))
        }

        // if (localStorage.getItem("users")) {
        //     const users: any = localStorage.getItem("users") || "[]";
        //     const allUsers = [...users, user];
        //     localStorage.setItem("users", JSON.stringify(allUsers))
        // } else {
        //     localStorage.setItem("users", JSON.stringify([user]))
        // }
    }

    // const onSignUpButtonClick = () => {
    //     const user = getValues();

    //     if (localStorage.getItem("users")) {
    //         const users: any = localStorage.getItem("users") || "[]";
    //         const allUsers = [...users, user];
    //         localStorage.setItem("users", JSON.stringify(allUsers))
    //     } else {
    //         localStorage.setItem("users", JSON.stringify([user]))
    //     }


    //     console.log("user", user)
    // }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image src="/logo.png" alt="logo" width={42} height={42} className="mx-auto h-10 w-auto" />
                    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Register your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6"  onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                        <div>
                            <label className="block text-sm/6 font-medium text-gray-900">Username</label>
                            <div className="mt-2">
                                <input type="text" id="username" required autoFocus className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" {...register("username")} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email"  id="email" required autoFocus className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" {...register("email")} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm/6 font-medium text-gray-900">Password</label>

                                {/* <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
                            </div>
                            <div className="mt-2">
                                <input type="password" id="password" required autoFocus className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" {...register("password")} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p> */}
                </div>
            </div>
        </>
    )
}