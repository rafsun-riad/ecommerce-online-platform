"use client";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import MiniLoadingSpinner from "./MiniLoadingSpinner";

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {pending ? <MiniLoadingSpinner /> : <Lock className="mr-2 h-4 w-4" />}
      {pending ? "Please wait" : "Login"}
    </Button>
  );
}

export default LoginButton;
