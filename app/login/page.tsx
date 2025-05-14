import Link from "next/link"
import SigninForm from "../components/forms/login/signin-form"

export default function LoginPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
            <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-4 w-full sm:w-96">
                <h1 className="font-semibold text-2xl text-center">Employee Portal</h1>
                <SigninForm />
                <p className="text-center">
                    Need to create an account?{" "}
                    <Link href="/register" className="text-blue-500 font-semibold">Register</Link>
                </p>
            </div>
        </div>
    )
}