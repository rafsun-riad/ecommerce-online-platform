import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function ProductEditPage() {
  return (
    <div className="mt-3 flex items-center justify-center">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          className={cn("bg-gray-200")}
          type="text"
          placeholder="Product name"
        />
        <Button variant="outline" type="submit">
          Save Product
        </Button>
      </div>
    </div>
  );
}

export default ProductEditPage;
