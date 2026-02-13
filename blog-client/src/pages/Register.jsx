import Input from "../components/common/Input";
import Button from "../components/common/Button";

export default function Register() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl text-center mb-8">
        Register
      </h1>

      <div className="space-y-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">Create Account</Button>
      </div>
    </div>
  );
}
