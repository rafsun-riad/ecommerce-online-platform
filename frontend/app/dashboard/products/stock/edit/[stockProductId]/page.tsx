import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

function StockEditPage() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <div className="space-y-3">
        <div className="flex max-w-sm flex-col justify-center">
          <Label className={cn("text-xl text-white")}>In Stock</Label>
          <Select>
            <SelectTrigger className={cn("min-w-48 bg-gray-200")}>
              <SelectValue placeholder="Select in stock" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="true">Yes</SelectItem>
                <SelectItem value="false">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className={cn("text-xl text-white")} htmlFor="countInStock">
            Count in stock
          </Label>
          <Input
            className={cn("bg-gray-200")}
            id="countInStock"
            type="number"
            placeholder="0"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className={cn("text-xl text-white")} htmlFor="quantity">
            Moved from stock
          </Label>
          <Input
            className={cn("bg-gray-200")}
            id="quantity"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
      <Button className={cn("mt-3")} variant="outline">
        Update Stock
      </Button>
    </div>
  );
}

export default StockEditPage;
