import AboutPatient from "@/components/molecules/about_patient"
import { DataTable } from "@/components/ui/data-table"
import { PatientColumns2 } from "@/lib/data-table-columns"

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

export default async function DashboardPatient() {
    const dataPatient = await getDataPatient()

    return (
        <div>
            <h1 className="font-semibold text-3xl mb-6">Dashboard Patient</h1>
            <AboutPatient />
            <h1 className="font-semibold text-2xl mt-10">Patient medical record</h1>
            <DataTable columns={PatientColumns2} data={dataPatient} />
        </div>
    )
}
