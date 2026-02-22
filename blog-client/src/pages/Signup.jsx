import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Signup() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const onSubmit = async (data) => {

    try {

      await api.post('/user/adduser', data)

      toast.success("Account Created Successfully", { duration: 3000 })

      reset()
      navigate('/login')


    } catch (error) {
      if (error.response) {

        if (error.response.status === 409) {

          toast.error("Email is already registered ");
        } else {

          toast.error(error.response.data.message || "Something went wrong ");
        }
      } else {

        toast.error("Server not responding ");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl text-center mb-8">Sign-up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <Input placeholder="Name"
            {...register("username", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <Input placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

        <div className="relative">
          <Input type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                message: "Must contain at least one letter and one number",
              },
            })}
          />

          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-sm text-gray-500">
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