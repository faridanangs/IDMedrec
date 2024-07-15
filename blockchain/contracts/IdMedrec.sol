// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
import "./Counters.sol";
import "./ReentryGuard.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IDMedRec is ReentrancyGuard, ERC20 {
    address internal owner;

    constructor() ERC20("IDMedRec", "IMR") {
        _mint(msg.sender, 20000000 * 10**18);
        owner = msg.sender;
    }

    using Counters for Counters.Counter;
    Counters.Counter private counterId;

    // Event
    event DoctorAdded(address doctorAddress_, uint256 doctorId_);
    event PatientAdded(address patientAddress_, uint256 patientId_);
    event MedicalRecordAdded(
        address patientAddress_,
        uint256 patientId_,
        address doctorAddress_,
        uint256 doctorId_
    );

    // Struct
    struct MedicalRecord {
        string uri;
        uint256 id;
    }
    struct DoctorStruct {
        address doctor;
        string uri;
        uint256 id;
    }
    struct PatientStruct {
        address patient;
        string uri;
        uint256 id;
    }

    // Maping
    mapping(address => mapping(uint256 => MedicalRecord[]))
        private patientRecords;
    mapping(address => mapping(uint256 => DoctorStruct)) private doctor;
    mapping(address => mapping(uint256 => PatientStruct)) private patient;

    /**
    @dev This function is used to create a medical record
    - Arguments: address, striing, uint256
    */
    function createMedicalRecord(
        address _patient,
        string memory _patientRecordUri,
        uint256 _patientId,
        uint256 _doctorId
    ) public nonReentrant returns (string memory) {
        require(
            doctor[msg.sender][_doctorId].doctor == msg.sender,
            "Error: Only Doctor can add a medical record"
        );
        require(
            patient[_patient][_patientId].patient == _patient,
            "Error: The patient is not there"
        );

        counterId.increment(1);
        MedicalRecord[] storage _medicalRecords = patientRecords[_patient][
            _patientId
        ];

        MedicalRecord memory _medicalRecord = MedicalRecord({
            uri: _patientRecordUri,
            id: counterId.current(1)
        });

        _medicalRecords.push(_medicalRecord);
        patientRecords[_patient][_patientId] = _medicalRecords;

        emit MedicalRecordAdded(_patient, _patientId, msg.sender, _doctorId);

        return "Medical Record Successfully added";
    }

    /**
    @dev This function is used to create a doctor account
    - Arguments: address, striing, uint256
    */
    function addDoctor(
        address _doctorAddress,
        string memory _doctorUri,
        uint256 _doctorId
    ) public returns (string memory) {
        require(msg.sender == owner, "Error: Only owner can add a doctor");
        require(
            doctor[_doctorAddress][_doctorId].id == 0,
            "Error: Doctor already exists"
        );

        counterId.increment(2);
        DoctorStruct memory _doctorStruct = DoctorStruct({
            doctor: _doctorAddress,
            uri: _doctorUri,
            id: counterId.current(2)
        });

        doctor[_doctorAddress][_doctorId] = _doctorStruct;
        emit DoctorAdded(_doctorAddress, _doctorId);

        return "Doctor successfully added";
    }

    /**
    @dev This function is used to create a patient account
    - Arguments: address, striing, uint256
    */
    function addPatient(
        address _patientAddress,
        string memory _patientUri,
        uint256 _patientId
    ) public returns (string memory) {
        require(
            patient[_patientAddress][_patientId].id == 0,
            "Error: Patient already exists"
        );

        counterId.increment(3);
        PatientStruct memory _patientStruct = PatientStruct({
            patient: _patientAddress,
            uri: _patientUri,
            id: counterId.current(3)
        });

        patient[_patientAddress][_patientId] = _patientStruct;
        emit PatientAdded(_patientAddress, _patientId);

        return "Patient successfully added";
    }

    /**
    @dev This function is used to get all medical record patient
    - Arguments: address, uint256
    */
    function getMedicalRecords(address _patient, uint256 _patientId)
        public
        view
        returns (MedicalRecord[] memory)
    {
        return patientRecords[_patient][_patientId];
    }

    /**
    @dev This function is used to get doctor account
    - Arguments: address, uint256
    */
    function getDoctor(address _doctorAddress, uint256 _doctorId)
        public
        view
        returns (DoctorStruct memory)
    {
        return doctor[_doctorAddress][_doctorId];
    }

    /**
    @dev This function is used to get patient account
    - Arguments: address, uint256
    */
    function getPatient(address _patientAddress, uint256 _patientId)
        public
        view
        returns (PatientStruct memory)
    {
        return patient[_patientAddress][_patientId];
    }

    /**
    @dev This function is used to get owner address
    */
    function getOwner() public view returns (address) {
        return owner;
    }
}
