"use client";
import { Button } from "@/components/ui/button";

import React from "react";
import { useFormStatus } from "react-dom";
import MiniLoadingSpinner from "./MiniLoadingSpinner";

function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {pending ? <MiniLoadingSpinner /> : null}
      {pending ? "Please wait" : "Sign Up"}
    </Button>
  );
}

export default SignupButton;
