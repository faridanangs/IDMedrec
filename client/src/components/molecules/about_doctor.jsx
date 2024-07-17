import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function AboutDoctor() {
  return (
    <Card className="md:w-[580px]">
      <CardHeader>
        <CardTitle className="text-xl">About Doctor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-y-3 grid-cols-2">
            <p className="font-semibold">Full Name</p>
            <p>Arie Akbarull</p>
            <p className="font-semibold">Email</p>
            <p>arie@gmail.com</p>
            <p className="font-semibold">Gender</p>
            <p>Male</p>
            <p className="font-semibold">Date of Birth</p>
            <p>20 Januari 2005</p>
            <p className="font-semibold">Address</p>
            <p>Jl Brainrot kecamatan rizz kab sigma provinsi fanum tax</p>
        </div>
      </CardContent>
    </Card>
  );
}
