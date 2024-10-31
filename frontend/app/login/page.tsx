"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { userLoginAction } from "../_lib/actions";
import LoginButton from "../_components/LoginButton";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  async function handleSubmit(formData) {
    const userToken = await userLoginAction(formData);
    const serializeData = JSON.stringify(userToken);
    document.cookie = `userToken=${serializeData}; path=/;`;
    router.push("/dashboard");
  }
  return (
    <div className="mt-48 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="flex items-center justify-center text-center text-2xl font-bold">
            <ShoppingBag className="mr-2 h-6 w-6" />
            Login to E-commerce Online
          </CardTitle>
          <CardDescription className="text-center">
            Enter your username and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  id="username"
                  placeholder="johndoe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <LoginButton />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link
            href="/"
            className="w-full text-center text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
