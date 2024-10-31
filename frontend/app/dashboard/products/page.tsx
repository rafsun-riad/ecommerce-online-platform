import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProductPage({
  id = 1,
  name = "Wireless Headphones",
  stock = 15,
  price = 129.99,
  imageUrl = "/product.jpg",
}: {
  id?: number;
  name?: string;
  stock?: number;
  price?: number;
  imageUrl?: string;
}) {
  return (
    <>
      <h2 className="mt-5 text-3xl text-white">All Products</h2>
      <div className="mt-3 grid grid-cols-3">
        <Card className="w-full max-w-sm overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h2 className="mb-2 text-xl font-semibold">{name}</h2>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-500">In stock: {stock}</span>
              <span className="text-lg font-bold">${price.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2 bg-gray-50 p-4">
            <Button asChild>
              <Link href={`/dashboard/products/stock/edit/${id}`}>
                Edit Stock
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/dashboard/products/edit/${id}`}>Edit Product</Link>
            </Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ProductPage;
