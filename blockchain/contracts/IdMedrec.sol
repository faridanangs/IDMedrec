// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
import "./Counters.sol";

contract IDMedRec {
    using Counters for Counters.Counter;
    Counters.Counter private _recordId;

    struct MedicalRecord {
        string Uri;
        uint256 Id;
    }

    mapping(address => mapping(uint256 => MedicalRecord[]))
        public patientRecords;

    function createMedicalRecord(
        address _patient,
        string memory _uri,
        uint256 _id
    ) public returns (string memory) {
        _recordId.increment();
        
        MedicalRecord[] storage _medicalRecords = patientRecords[_patient][_id];

        MedicalRecord memory _medicalRecord = MedicalRecord({
            Uri: _uri,
            Id: _recordId.current()
        });

        _medicalRecords.push(_medicalRecord);

        patientRecords[_patient][_id] = _medicalRecords;

        return "Add Medical Record Successfully";
    }

    function getMedicalRecords(
        address _patient,
        uint256 _id
    ) public view returns (MedicalRecord[] memory) {
        return patientRecords[_patient][_id];
    }
}
