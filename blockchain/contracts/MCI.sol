// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./SharedStructs.sol";

/// @notice This interface defines the standard functions and events for managing medical records, doctors, and patients on the blockchain.
interface MCI {
    /// @notice Retrieves the medical records associated with a patient
    /// @param _patient The address of the patient
    /// @param _patientId The unique ID of the patient
    /// @return An array of MedicalRecord structs
    function getMedicalRecords(
        address _patient,
        uint256 _patientId
    ) external view returns (SharedStructs.MedicalRecord[] memory);

    /// @notice Retrieves the information of a doctor
    /// @param _doctorAddress The address of the doctor
    /// @param _doctorId The unique ID of the doctor
    /// @return A DoctorStruct containing the doctor's information
    function getDoctor(
        address _doctorAddress,
        uint256 _doctorId
    ) external view returns (SharedStructs.DoctorStruct memory);

    /// @notice Retrieves the information of a patient
    /// @param _patientAddress The address of the patient
    /// @param _patientId The unique ID of the patient
    /// @return A PatientStruct containing the patient's information
    function getPatient(
        address _patientAddress,
        uint256 _patientId
    ) external view returns (SharedStructs.PatientStruct memory);

    /// @notice Retrieves the address of the contract owner
    /// @return The address of the contract owner
    function getOwner() external view returns (address);

    /// @notice Retrieves the total number of doctors in the system
    /// @return The total number of doctors
    function getDoctorAmount() external view returns (uint256);

    /// @notice Retrieves the total number of patients in the system
    /// @return The total number of patients
    function getPatientAmount() external view returns (uint256);
}
