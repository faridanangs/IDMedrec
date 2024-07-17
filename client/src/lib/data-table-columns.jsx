"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "./utils"

export const DoctorColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  }
]

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
]

export const PatientColumns2 = [
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
  {
    header: "Action",
    cell: ({ row }) => {
      const patient = row.original

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Detail</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Detail Patient Medical Record</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className={cn(
                  'grid gap-y-3 grid-cols-2',
                  'text-black text-base'
                )}>
              <p className="font-semibold">Full Name</p>
              <p>{patient.name}</p>
              <p className="font-semibold">Username</p>
              <p>{patient.username}</p>
              <p className="font-semibold">Email</p>
              <p>{patient.email}</p>
            </div>
          </DialogContent>
        </Dialog>
      )
    }
  },
]
