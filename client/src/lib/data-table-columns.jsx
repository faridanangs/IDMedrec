"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "./utils";
import { fieldMapping } from "./medical_record_field";

export const PatientColumns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
  },
  {
    accessorKey: "public_address",
    header: "Public Address",
  },
];

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
          <DialogContent className="lg:max-w-4xl xl:max-w-6xl w-full md:max-w-2xl overflow-auto max-h-[80%] rounded-md">
            <DialogHeader>
              <DialogTitle className="mb-4">
                Detail Patient Medical Record
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <Table isStriped aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Field</TableColumn>
                <TableColumn>Information</TableColumn>
              </TableHeader>
              <TableBody className="overflow-auto">
                {separatedData.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.field}</TableCell>
                    <TableCell>{item.information}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
