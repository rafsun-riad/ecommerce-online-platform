"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import cookies from "browser-cookies";
import { categoryCreateAction } from "../_lib/actions";
import { useRouter } from "next/navigation";

function CategoryCreate() {
  const [categoryName, setCategoryName] = useState("");
  const router = useRouter();
  async function handleSubmit() {
    const serializedData = cookies.get("userToken");
    const tokens = JSON.parse(serializedData);
    await categoryCreateAction({
      name: categoryName,
      userToken: tokens.access,
    });
    setCategoryName("");
    router.replace("/dashboard/category");
  }
  return (
    <div className="mx-auto mt-6 flex w-full max-w-sm items-center justify-center space-x-2">
      <Input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Enter category name"
        className={cn("bg-gray-200")}
      />
      <Button onClick={handleSubmit} variant="secondary">
        Add Category
      </Button>
    </div>
  );
}

export default CategoryCreate;
