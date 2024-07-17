import AboutDoctor from "@/components/molecules/about_doctor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "@/components/ui/data-table"
import { Input } from "@/components/ui/input"
import { PatientColumns2 } from "@/lib/data-table-columns"
import { Button } from "@/components/ui/button"
import MedicalRecordForm from "@/components/molecules/medical_record_form"

async function getDataPatient() {
    return [
        {
            id: '1',
            name: 'Rehan kopling',
            username: 'rehancu',
            email: 'rehan@gmail.com',
            gender: 'Male',
            phone_number: '088110222222',
            date_of_birth: '20 Januari 2005',
            public_address: '0x696969'
        },
        {
            id: '2',
            name: 'Kai cenat',
            username: 'kaicenut',
            email: 'kai@gmail.com',
            gender: 'Male',
            phone_number: '088110222222',
            date_of_birth: '20 Februari 2005',
            public_address: '0x696969'
        },
    ]
}

export default async function DashboardDoctor() {
    const dataPatient = await getDataPatient()

    return (
        <div>
            <h1 className="font-semibold text-3xl mb-6">Dashboard Doctor</h1>
            <Tabs defaultValue="medical_record_form" className="w-full mb-12">
                <TabsList className="px-3 py-6 mb-4">
                    <TabsTrigger value="medical_record_form" className="sm:px-10 py-2">Medical Record Form</TabsTrigger>
                    <TabsTrigger value="about_doctor" className="sm:px-10 py-2">About Doctor</TabsTrigger>
                </TabsList>
                <TabsContent value="medical_record_form">
                    <MedicalRecordForm />
                </TabsContent>
                <TabsContent value="about_doctor">
                    <AboutDoctor />
                </TabsContent>
            </Tabs>
            <h1 className="font-semibold text-2xl mb-4">Patient medical record</h1>
            <div className="flex">
                <Input
                    type="text"
                    className="md:w-[385px] mr-2"
                    placeholder="enter the address user"
                />
                <Input
                    type="number"
                    className="w-[100px] sm:w-[150px] mr-4"
                    placeholder="id"
                />
                <Button>Search</Button>
            </div>
            <DataTable columns={PatientColumns2} data={dataPatient} />
        </div>
    )
}
