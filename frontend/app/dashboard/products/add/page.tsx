"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ProductCreateForm() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages((prevImages) => [...prevImages, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-5 max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow"
    >
      <h1 className="mb-6 text-2xl font-bold">Create New Product</h1>

      <div className="space-y-2">
        <Label htmlFor="productName">Product Name</Label>
        <Input id="productName" name="productName" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" type="number" step="0.01" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="countInStock">Count in Stock</Label>
          <Input id="countInStock" name="countInStock" type="number" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" name="quantity" type="number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Product Category</Label>
          <Select name="category">
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              {/* Add more categories as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="warehouse">Warehouse</Label>
        <Select name="warehouse">
          <SelectTrigger>
            <SelectValue placeholder="Select a warehouse" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="warehouse1">Warehouse 1</SelectItem>
            <SelectItem value="warehouse2">Warehouse 2</SelectItem>
            <SelectItem value="warehouse3">Warehouse 3</SelectItem>
            {/* Add more warehouses as needed */}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Stock Notes</Label>
        <Textarea id="notes" name="notes" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="productImages">Product Images</Label>
        <Input
          id="productImages"
          name="productImages"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          // eslint-disable-next-line tailwindcss/classnames-order
          className="block w-full px-4 py-1.5 text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
        />
        {images.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium">Selected Images:</p>
            <div className="flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div key={index} className="group relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index + 1}`}
                    className="h-20 w-20 rounded object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-0 top-0 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Button type="submit" className="w-full">
        Create Product
      </Button>
    </form>
  );
}
