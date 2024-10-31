"use client";

import { getCategoryById } from "@/app/_lib/apiService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import cookies from "browser-cookies";
import { updateCategoryByIdAction } from "@/app/_lib/actions";

function EditCategoryPage() {
  const [categoryName, setCategoryName] = useState();
  const [category, setCategory] = useState();
  const router = useRouter();
  const params = useParams();
  const { categoryId } = params;

  useEffect(() => {
    async function categoryByID() {
      const serializedData = cookies.get("userToken");
      const tokens = JSON.parse(serializedData);
      const data = await getCategoryById({
        id: categoryId,
        userToken: tokens.access,
      });
      setCategory(data);
      setCategoryName(category?.name);
    }
    categoryByID();
  }, [categoryId, category?.name]);

  async function handleCategoryUpdate() {
    const serializedData = cookies.get("userToken");
    const tokens = JSON.parse(serializedData);
    await updateCategoryByIdAction({
      id: categoryId,
      name: categoryName,
      userToken: tokens.access,
    });
    router.push("/dashboard/category");
  }

  return (
    <div className="mx-auto mt-6 flex w-full max-w-sm items-center justify-center space-x-2">
      <Input
        defaultValue={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        type="text"
        placeholder="Enter category name"
        className={cn("bg-gray-300")}
      />
      <Button onClick={handleCategoryUpdate} variant="secondary">
        Save Category
      </Button>
    </div>
  );
}

export default EditCategoryPage;
