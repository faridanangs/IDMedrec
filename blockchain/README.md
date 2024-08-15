# IDMedRec Smart Contract Documentation

## Overview

The `IDMedRec` smart contract allows for managing and retrieving medical records, doctors, and patient information on the blockchain. This documentation will guide you through creating the necessary structures, interfaces, and smart contract code to interact with the `IDMedRec` smart contract.

## Structur Folder
![folder](https://github.com/faridanangs/IDMedrec/blob/main/blockchain/assets/Screenshot%202024-08-12%20202545.png)

## Structs

### SharedStructs.sol

This file defines the data structures used in the smart contract.

```solidity
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
```

## Interface

### MCI.sol
In Solidity, an interface is an abstract contract that only declares functions without implementing them. Interfaces are used to define the rules for how other contracts can interact with the contract that implements the interface.

For example, in the MCI.sol file, this interface defines the functions available for interacting with the IDMedRec smart contract. By using this interface, other contracts can call the functions within IDMedRec without needing to know the details of its implementation. This facilitates secure and structured communication between smart contracts on the Ethereum (EVM) network.

This interface defines the functions available for interacting with the IDMedRec smart contract.
```solidity
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
```

## Example Smart Contract

### MCC.sol

This contract demonstrates how to use the MCI interface to access data from the IDMedRec smart contract and Structs at MCI.sol Must same in MCC.sol, if you want to interact with other smart contracts, you must have the contract address.

**Contract Address IdMedrec:**
```Contract Address
0x2D9FDe1edfcF5Ab0977D7095B6A6a61Fb41E62C3
```
```solidity
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
```
## Deployment
- **Current Network:** Polygon Amoy
- [Polygon Faucet](https://faucet.polygon.technology)
  
#### After accessing Remix IDE, connect your wallet using MetaMask and select the Polygon Amoy network.

![Polygon Amoy](https://github.com/faridanangs/IDMedrec/blob/main/blockchain/assets/Screenshot%202024-08-15%20192012.png)

#### Next, choose **Deploy and Run Transactions**. In the deployment settings, click on **Environment** and select **Injected Provider - MetaMask**.

![Metamask](https://github.com/faridanangs/IDMedrec/blob/main/blockchain/assets/Screenshot%202024-08-15%20191939.png)

##### You can use this account to testing
1. **Doctor**:
    - Address: 0x1a5Bb892D13753cB89c06115e2033A5F874ad66b
    - ID: 16513645808439724
1. **Patient**:
    - Address: 0x5aA9CC140504fca7c8821b24b2EA0a59c110AE8C
    - ID: 4778126818154238

