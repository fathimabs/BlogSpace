import Button from "../components/common/Button"
import Input from "../components/common/Input"




function Login() {

    return (
        <div className="max-w-md mx-auto px-4 py-16">
            <h1 className="text-3xl text-center mb-8">
                Login
            </h1>

            <div className="space-y-4">
                <Input placeholder="Email" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full">Login</Button>
            </div>
        </div>
    );
}

export default Login