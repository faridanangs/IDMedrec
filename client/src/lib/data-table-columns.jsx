"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fieldMapping } from "./medical_record_field";

export const PatientColumns2 = [
  {
    accessorKey: "patient_id",
    header: "Id",
  },
  {
    accessorKey: "fullname",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date_visit",
    header: "Visite Date",
  },
  {
    accessorKey: "wallet_address",
    header: "Wallet Address",
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const patient = row.original;

      const separatedData = Object.keys(patient).map((key) => ({
        field: fieldMapping[key] || key,
        information: patient[key],
      }));

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Detail</Button>
          </DialogTrigger>
          <DialogContent className="lg:max-w-3xl xl:max-w-4xl w-full md:max-w-2xl max-h-[90%] h-full rounded-md">
            <DialogHeader>
              <DialogTitle className="mb-2">
                Detail Patient Medical Record
              </DialogTitle>
            </DialogHeader>
              <Table
                className="min-w-full"
                isHeaderSticky
                classNames={{
                  base: "max-h-[80vh] overflow-scroll",
                }}
              >
                <TableHeader className="fixed top-0 bg-white/80 z-10">
                  <TableColumn key="field">Field</TableColumn>
                  <TableColumn key="information">Information</TableColumn>
                </TableHeader>
                <TableBody items={separatedData}>
                  {(item) => (
                    <TableRow key={item.field}>
                      {(col) => <TableCell>{getKeyValue(item, col)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
