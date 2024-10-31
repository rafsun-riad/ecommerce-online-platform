"use client";
import CategoryCreate from "@/app/_components/CategoryCreate";
import { getCategories } from "@/app/_lib/apiService";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import cookies from "browser-cookies";
import { useRouter } from "next/navigation";
import { categoryDeleteAction } from "@/app/_lib/actions";

// const categories = [
//   { id: 1, name: "Electronics" },
//   { id: 2, name: "Upcoming" },
//   { id: 3, name: "Dress" },
// ];

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getCategory() {
      const serializedData = cookies.get("userToken");
      const tokens = JSON.parse(serializedData);
      const data = await getCategories({ userToken: tokens.access });
      setCategories(data);
    }
    getCategory();
  }, []);

  async function handleDelete(id) {
    const serializedData = cookies.get("userToken");
    const tokens = JSON.parse(serializedData);
    await categoryDeleteAction({ id, userToken: tokens.access });
    router.replace("/dashboard/category");
  }

  return (
    <>
      <CategoryCreate />
      <div className="mt-5">
        <p className="border-b-[1px] border-white pb-3 text-3xl text-white">
          All Category
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {categories.length <= 0 ? (
            <p className="text-xl text-white">Start adding some category</p>
          ) : (
            categories.map((category) => (
              <Card key={category.id} className={cn("max-w-lg")}>
                <CardContent
                  className={cn("flex items-center justify-between px-10 py-5")}
                >
                  <p className="text-lg">{category.name}</p>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline">
                      <Link href={`/dashboard/category/edit/${category.id}`}>
                        Edit
                      </Link>
                    </Button>
                    <Button
                      onClick={() => handleDelete(category.id)}
                      variant="destructive"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
