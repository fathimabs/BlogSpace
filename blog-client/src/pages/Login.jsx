import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useDispatch } from "react-redux";
import { updateAuth } from "../redux/authSlice";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/user/login", data);

      const result = response.data;

      // Save to Redux

      dispatch(
        updateAuth({
          user: {
            _id: result.userId,
            username: result.username,
            email: result.email,
          },
          token: result.token,
        })
      );

      toast.success("Login Successful");

      navigate('/')

    } catch (error) {
      if (error.response) {

        toast.error(error.response.data.message);

      } else {

        toast.error("Server not responding");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl text-center mb-8">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>

          <Input placeholder="Email"
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

        <div className="relative">

          <Input type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-gray-500">

            {showPassword ? "Hide" : "Show"}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>

      </form>
    </div>
  );
}

export default Login;
