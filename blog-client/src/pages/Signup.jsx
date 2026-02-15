import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

 function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    alert("Account created successfully!");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl text-center mb-8">Register</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <Input
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password with Toggle */}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {/* Show / Hide Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>

      </form>
    </div>
  );
}


export default Signup