import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function WarehouseEditPage() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className={cn("text-xl text-white")} htmlFor="name">
          Warehouse Name
        </Label>
        <Input
          className={cn("bg-gray-200")}
          type="text"
          id="name"
          placeholder="Enter warehouse name"
        />
      </div>
      <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
        <Label className={cn("text-xl text-white")} htmlFor="location">
          Warehouse Location
        </Label>
        <Input
          className={cn("bg-gray-200")}
          type="text"
          id="location"
          placeholder="Enter warehouse location"
        />
      </div>
      <Button className={cn("mt-3")} variant="outline">
        Save Warehouse
      </Button>
    </div>
  );
}

export default WarehouseEditPage;
