const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Testing IDMedRec", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, otherAccount2] = await ethers.getSigners();

    const IDMedRec = await ethers.getContractFactory("IDMedRec");
    const iDMedRec = await IDMedRec.deploy();

    return { iDMedRec, owner, otherAccount, otherAccount2 };
  }

  it("Add Patient Medical Record", async function () {
    const { iDMedRec, owner, otherAccount, otherAccount2 } = await loadFixture(deployOneYearLockFixture);

    // Add doctor
    await iDMedRec.addDoctor(otherAccount.address, "https://pinata/ipfs/1", 7859922208950583n);

    // Connect to doctor account
    const doctor = iDMedRec.connect(otherAccount);

    // Add patient
    await doctor.addPatient(otherAccount2.address, "https://pinata/ipfs/121321bh", 7859922208950583n);

    // Add medical record
    await doctor.createMedicalRecord(otherAccount2.address, "https://pinata/ipfs/7859922208950583n", 7859922208950583n, otherAccount.address, 7859922208950583n);

    // Get medical record
    const data = await doctor.getMedicalRecords(otherAccount2.address, 7859922208950583n);

    expect(data[0][0]).to.equal("https://pinata/ipfs/7859922208950583n");
  });

  it("Get Patient Medical Record", async function () {
    const { iDMedRec, owner, otherAccount, otherAccount2 } = await loadFixture(deployOneYearLockFixture);

    // Add doctor
    await iDMedRec.addDoctor(otherAccount.address, "https://pinata/ipfs/1", 7859922208950583n);

    // Connect to doctor account
    const doctor = iDMedRec.connect(otherAccount);

    // Add patient
    await doctor.addPatient(otherAccount2.address, "https://pinata/ipfs/121321bh", 7859922208950583n);

    // Add medical record
    await doctor.createMedicalRecord(otherAccount2.address, "https://pinata/ipfs/7859922208950583n", 7859922208950583n, otherAccount.address, 7859922208950583n);
    await doctor.createMedicalRecord(otherAccount2.address, "https://pinata/ipfs/7859922208950583n", 7859922208950583n, otherAccount.address, 7859922208950583n);

    // Get medical record
    const data = await doctor.getMedicalRecords(otherAccount2.address, 7859922208950583n);

    expect(data[0][0]).to.equal("https://pinata/ipfs/7859922208950583n");
  });

  it("Add and Get Doctor", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await iDMedRec.addDoctor(otherAccount.address, "https://pinata/ipfs/1", 7859922208950583n);
    const data = await iDMedRec.getDoctor(otherAccount.address, 7859922208950583n);

    expect(data[1]).to.equal("https://pinata/ipfs/1");
  });

  it("Add and Get Patient", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await iDMedRec.addPatient(otherAccount.address, "https://pinata/ipfs/1", 7859922208950583n);
    const data = await iDMedRec.getPatient(otherAccount.address, 7859922208950583n)

    expect(data[1]).to.equal("https://pinata/ipfs/1");
  });
  it("Doctor not found", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await expect(iDMedRec.getDoctor(otherAccount.address, 7859922208950583n)).to.be.revertedWith("Error: Doctor not found");
  });
  it("Patient not found", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await expect(iDMedRec.getPatient(otherAccount.address, 7859922208950583n)).to.be.revertedWith("Error: Patient not found");
  });
  it("Medical record not found", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await expect(iDMedRec.getMedicalRecords(otherAccount.address, 7859922208950583n)).to.be.revertedWith("Error: Medical record not found");
  });
});
