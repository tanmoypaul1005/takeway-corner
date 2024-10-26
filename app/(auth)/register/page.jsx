"use client"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Google from "../components/Google";
import Github from "../components/Github";
import LoginInput from "@app/components/input/LoginInput";
import LoginButton from "@app/components/button/LoginButton";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            setError(result.error);
        } else {
            router.replace("/");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.error) {
            setError(data.error);
        } else {
            router.replace("/login");
        }
    };

    return (
        <div>
            {/* <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>

      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form> */}

            <div className="flex justify-center w-full overflow-y-auto text-gray-100 bg-gray-900 h-fit">
                <div className="flex justify-center flex-1 m-0 shadow sm:rounded-lg">
                    <div className="p-8 lg:w-1/2 xl:w-5/12 sm:p-12">
                        <div>
                            <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                                className="w-32 mx-auto" />
                        </div>
                        <div className="flex flex-col items-center mt-4">
                            <h1 className="text-2xl font-extrabold xl:text-3xl">
                                Sign up
                            </h1>
                            <div className="flex-1 w-full mt-6">
                                <div className="flex flex-col items-center">
                                    <Google />
                                    <Github />
                                </div>

                                <div className="my-8 text-center border-b">
                                    <div
                                        className="inline-block px-2 pb-8 text-sm font-medium leading-none tracking-wide text-white transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>

                                <div className="flex flex-col max-w-xs mx-auto gap-y-5">

                                    <LoginInput
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter a Name"
                                        type="text"
                                    />

                                    <LoginInput
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter a Email"
                                        type="email"
                                    />
                                    <LoginInput
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter a Password"
                                        type="password"
                                    />

                                    <LoginButton title="Register" />
                                    <p className="text-xs text-center text-white ">
                                        I agree to abide by templatana's
                                        <a href="#" class="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" class="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
                        <div
                            className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
                            style={{
                                backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;