import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@nextui-org/react";

export default function AboutPatient({patient}) {
  return (
    <Card className="md:w-[580px]">
      {patient ? (
        <>
          <CardHeader>
            <CardTitle className="text-xl">About Patient</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-y-3 grid-cols-2">
              <p className="font-semibold">Full Name</p>
              <p>{patient?.name}</p>
              <p className="font-semibold">Username</p>
              <p>@{patient?.username}</p>
              <p className="font-semibold">Email</p>
              <p>{patient?.email}</p>
              <p className="font-semibold">ID</p>
              <p>{patient?.id}</p>
              <p className="font-semibold">Wallet Address</p>
              <p>
                {patient?.wallet_address.slice(0, 5)}....
                {patient?.wallet_address.slice(-5)}
              </p>
              <p className="font-semibold">Created At</p>
              <p>{patient?.created_at}</p>
            </div>
          </CardContent>
        </>
      ) : (
        <div className="w-full h-[20rem] flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </Card>
  );
}
