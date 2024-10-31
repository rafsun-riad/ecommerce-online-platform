"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { userRegisterAction } from "../_lib/actions";
import { useRouter } from "next/navigation";
import SignupButton from "../_components/SignupButton";

function RegisterPage() {
  const router = useRouter();
  async function handleSubmit(formData) {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");

    if (password1 === password2) {
      const userToken = await userRegisterAction({
        first_name,
        last_name,
        username,
        email,
        password: password1,
      });
      const serializeData = JSON.stringify(userToken);
      document.cookie = `userToken=${serializeData}; path=/;`;
      router.push("/dashboard");
    }
  }
  return (
    <div className="mt-10 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="flex-1 p-6 md:p-8">
              <CardHeader className="mb-6 p-0">
                <CardTitle className="text-3xl font-bold">
                  Create an account
                </CardTitle>
                <CardDescription>
                  Sign up to get started with our service
                </CardDescription>
              </CardHeader>
              <form action={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    name="first_name"
                    id="first-name"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    name="last_name"
                    id="last-name"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Username</Label>
                  <Input
                    name="username"
                    id="last-name"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password1"
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    name="password2"
                    id="confirm-password"
                    type="password"
                    required
                  />
                </div>
                <SignupButton />
              </form>
              <p className="mt-3 text-center text-sm">
                Already have an account?
                <Link href="/login" className="text-blue-600">
                  {" "}
                  Login
                </Link>
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 bg-gray-200">
              <img
                src="/signup-image.jpg"
                alt="Sign up illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
