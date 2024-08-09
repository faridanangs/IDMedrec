// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SharedStructs {
    /// @notice Represents a medical record in the system
    struct MedicalRecord {
        string uri;
        uint256 id;
    }
    /// @notice Represents a doctor in the system
    struct DoctorStruct {
        address doctor;
        string uri;
        uint256 id;
    }

    /// @notice Represents a patient in the system
    struct PatientStruct {
        address patient;
        string uri;
        uint256 id;
    }
}
