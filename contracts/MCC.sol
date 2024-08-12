// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./MCI.sol";
import "./SharedStructs.sol";

contract MCC {
    address constant IDMEDREC_ADDRESS = 0x2D9FDe1edfcF5Ab0977D7095B6A6a61Fb41E62C3;

    MCI private mci = MCI(IDMEDREC_ADDRESS);

    /// @notice Retrieves the address of the contract owner
    /// @return The address of the contract owner
    function getOwner() external view returns (address) {
        return mci.getOwner();
    }

    /// @notice Retrieves the medical records associated with a patient
    /// @param _patient The address of the patient
    /// @param _patientId The unique ID of the patient
    /// @return An array of MedicalRecord structs
    function getMedicalRecords(address _patient, uint256 _patientId)
        public
        view
        returns (SharedStructs.MedicalRecord[] memory)
    {
        return mci.getMedicalRecords(_patient, _patientId);
    }

    /// @notice Retrieves the information of a patient
    /// @param _patientAddress The address of the patient
    /// @param _patientId The unique ID of the patient
    /// @return A PatientStruct containing the patient's information
    function getPatient(address _patientAddress, uint256 _patientId)
        external
        view
        returns (SharedStructs.PatientStruct memory)
    {
        return mci.getPatient(_patientAddress, _patientId);
    }

    /// @notice Retrieves the information of a doctor
    /// @param _doctorAddress The address of the doctor
    /// @param _doctorId The unique ID of the doctor
    /// @return A DoctorStruct containing the doctor's information
    function getDoctor(address _doctorAddress, uint256 _doctorId)
        external
        view
        returns (SharedStructs.DoctorStruct memory)
    {
        return mci.getDoctor(_doctorAddress, _doctorId);
    }
}