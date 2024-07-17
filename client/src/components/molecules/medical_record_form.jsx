"use client"
import { useState } from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function MedicalRecordForm() {
  const [dateVisit, setDateVisit] = useState()
  const [dateOfBirth, setDateOfBirth] = useState()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Medical Record Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
            <div className="grid gap-y-6 lg:gap-y-0 gap-x-6 md:grid-cols-3 lg:grid-cols-4 mb-10">
                <aside>
                    <p className="font-medium mb-4">Patient Identity Information</p>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input
                            type="text"
                            id="fullname"
                            placeholder="type your full name here"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="walllet_address">Wallet Address</Label>
                        <Input
                            type="text"
                            id="walllet_address"
                            placeholder="type your address here"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="unique_id">Unique ID</Label>
                        <Input
                            type="number"
                            id="unique_id"
                            placeholder="type your unique id here"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="medical_record_number">Medical Record Number</Label>
                        <Input
                            type="text"
                            id="medical_record_number"
                            placeholder="type your number here"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="type your email here"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <Input
                            type="text"
                            id="phone_number"
                            placeholder="type your phone number here"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="date_of_birth">Date of Birth</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                id="date_of_birth"
                                variant={"outline"}
                                className={cn(
                                "justify-start text-left font-normal",
                                !dateOfBirth && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={dateOfBirth}
                                onSelect={setDateOfBirth}
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label>Gender</Label>
                        <RadioGroup defaultValue="male" className="flex mt-1">
                            <div className={cn("flex items-center", "space-x-2 mr-2")}>
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                            className="resize-none"
                            id="address"
                        />
                    </div>
                </aside>
                <aside>
                    <p className="font-medium mb-4">Medical History</p>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="prev_illness">Previous Illnesses</Label>
                        <Textarea
                            className="resize-none"
                            id="prev_illness"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="surge_or_medical_procedur">Surgeries or Medical Procedures</Label>
                        <Textarea
                            className="resize-none"
                            id="surge_or_medical_procedur"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="allergy_history">Allergy History</Label>
                        <Textarea
                            className="resize-none"
                            id="allergy_history"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="family_medical_history">Family Medical History</Label>
                        <Textarea
                            className="resize-none"
                            id="family_medical_history"
                        />
                    </div>
                </aside>
                <aside>
                    <p className="font-medium mb-4">Visit Information</p>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="visit_date">Visit Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                id="visit_date"
                                variant={"outline"}
                                className={cn(
                                "justify-start text-left font-normal",
                                !dateVisit && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateVisit ? format(dateVisit, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={dateVisit}
                                onSelect={setDateVisit}
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="reason_for_visit">Reason for Visit</Label>
                        <Textarea
                            className="resize-none"
                            id="reason_for_visit"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="symptom_experie">Symptoms Experienced</Label>
                        <Textarea
                            className="resize-none"
                            id="symptom_experie"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="diagnosis">Diagnosis</Label>
                        <Textarea
                            className="resize-none"
                            id="diagnosis"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="treat_plan_or_medica">Treatment Plan or Medication</Label>
                        <Textarea
                            className="resize-none"
                            id="treat_plan_or_medica"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="presciption">Presciption</Label>
                        <Textarea
                            className="resize-none"
                            id="presciption"
                        />
                    </div>
                </aside>
                <aside>
                    <p className="font-medium mb-4">Examination & Test Results</p>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="lab_test_result">Laboratory Test Results</Label>
                        <Textarea
                            className="resize-none"
                            id="lab_test_result"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-4">
                        <Label htmlFor="radio_result">Radiology Results</Label>
                        <Textarea
                            className="resize-none"
                            id="radio_result"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="other_speci_tes_res">Other Specialized Test Results</Label>
                        <Textarea
                            className="resize-none"
                            id="other_speci_tes_res"
                        />
                    </div>
                </aside>
            </div>
            <Button className="w-full py-6" type="submit">Save Medical Record</Button>
        </form>
      </CardContent>
    </Card>
  )
}
