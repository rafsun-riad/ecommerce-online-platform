import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

const warehouses = [
  {
    id: 1,
    name: "Warehouse 1",
    location: "Somewhere",
  },
  {
    id: 2,
    name: "Warehouse 2",
    location: "Anywhere",
  },
];

function WarehousePage() {
  return (
    <>
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
          Add Warehouse
        </Button>
      </div>
      <div className="mt-5">
        <p className="border-b-[1px] border-white pb-3 text-3xl text-white">
          All Category
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {warehouses.map((warehouse) => (
            <Card key={warehouse.id}>
              <CardContent className={cn("px-10 py-5")}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-bold text-lg">{warehouse.name}</h2>
                    <p className="text-xs text-gray-500">
                      {warehouse.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline">
                      <Link href={`/dashboard/warehouse/edit/${warehouse.id}`}>
                        Edit
                      </Link>
                    </Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default WarehousePage;
