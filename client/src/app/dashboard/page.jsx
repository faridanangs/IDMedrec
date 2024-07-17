import { DoctorColumns, PatientColumns } from "@/lib/data-table-columns"
import NumberCard from "@/components/molecules/number_card"
import { DataTable } from "@/components/ui/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddDoctorBtnModal from "@/components/molecules/add_doctor_btn_modal"
import { cn } from "@/lib/utils"

async function getDataDoctor() {
    return [
        {
            "id": "1",
            "name": "Arie",
            "email": "arieanjai@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "2",
            "name": "Joko",
            "email": "joko@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "3",
            "name": "Rikka",
            "email": "rikka@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "4",
            "name": "Budi",
            "email": "budi@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "5",
            "name": "Ani",
            "email": "ani@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "6",
            "name": "Dewi",
            "email": "dewi@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "7",
            "name": "Yanto",
            "email": "yanto@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "8",
            "name": "Sri",
            "email": "sri@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "9",
            "name": "Tono",
            "email": "tono@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "10",
            "name": "Putri",
            "email": "putri@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "11",
            "name": "Siti",
            "email": "siti@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "12",
            "name": "Agus",
            "email": "agus@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "13",
            "name": "Rini",
            "email": "rini@gmail.com",
            "gender": "Ciwi"
        },
        {
            "id": "14",
            "name": "Bambang",
            "email": "bambang@gmail.com",
            "gender": "Lakik"
        },
        {
            "id": "15",
            "name": "Wati",
            "email": "wati@gmail.com",
            "gender": "Ciwi"
        }
    ]    
}
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

export default async function DashboardAdmin() {
    const dataDoctor = await getDataDoctor()
    const dataPatient = await getDataPatient()

    return (
        <div>
            <h1 className="font-semibold text-3xl mb-6">Dashboard Admin</h1>
            <div className={cn(
                'flex flex-col md:flex-row',
                'mb-12'
            )}>
                <div className="mb-4 md:mb-0 md:mr-8">
                    <NumberCard title="doctors" amount={30} />
                </div>
                <NumberCard title="patients" amount={40} />
            </div>
            <Tabs defaultValue="doctor" className="w-full relative">
                <TabsList className="px-3 py-6">
                    <TabsTrigger value="doctor" className="px-10 py-2">Doctor</TabsTrigger>
                    <TabsTrigger value="patient" className="px-10 py-2">Patient</TabsTrigger>
                </TabsList>
                <TabsContent value="doctor">
                    <AddDoctorBtnModal />
                    <DataTable columns={DoctorColumns} data={dataDoctor} />
                </TabsContent>
                <TabsContent value="patient">
                    <DataTable columns={PatientColumns} data={dataPatient} />
                </TabsContent>
            </Tabs>
        </div>
    )
}
