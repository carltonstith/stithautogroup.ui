import Link from "next/link";
import SignupForm from "../components/forms/register/signup-form";

export default function RegisterPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
            <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-4 w-full sm:w-96">
                <h1 className="font-semibold text-2xl text-center">Employee Portal</h1>
                <SignupForm />
                <p className="text-center">
                Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 font-semibold">Login</Link>
                </p>
            </div>
        </div>
        // <div>
        //     <p className="text-center">
        //     Already have an account?{" "}
        //     <Link href="/login" className="text-blue-500 font-semibold">Login</Link>
        //     </p>
        // </div>
    )
}