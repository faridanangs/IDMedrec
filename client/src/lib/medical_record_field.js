export const fieldMapping = {
  wallet_address: "Wallet Address",
  medical_record_number: "Medical Record Number",
  patient_id: "Patient ID",
  email: "Email",
  phone_number: "Phone Number",
  address: "Address",
  date_of_birth: "Date Of Birth",
  prev_illness: "Previous Illness",
  surge_or_medical_procedur: "Surgery or Medical Procedure",
  allergy_history: "Allergy History",
  family_medical_history: "Family Medical History",
  reason_for_visit: "Reason for Visit",
  date_visit: "Visit Date",
  symptom_experie: "Symptom Experience",
  diagnosis: "Diagnosis",
  treat_plan_or_medica: "Treatment Plan or Medication",
  prescription: "Prescription",
  lab_test_result: "Lab Test Result",
  radio_result: "Radiology Result",
  other_speci_tes_res: "Other Special Test Results",
  gender: "Gender",
  created_at: "Created At",
};

export const getDisplayName = (field) => {
  return fieldMapping[field] || field;
};
