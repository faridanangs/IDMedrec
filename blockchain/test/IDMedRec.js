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
    await iDMedRec.addDoctor(otherAccount.address, "https://pinata/ipfs/1", 123);

    // Connect to doctor account
    const doctor = iDMedRec.connect(otherAccount);

    // Add patient
    await doctor.addPatient(otherAccount2.address, "https://pinata/ipfs/121321bh", 111);

    // Add medical record
    await doctor.createMedicalRecord(otherAccount2.address, "https://pinata/ipfs/123", 111, 123);

    // Get medical record
    const data = await doctor.getMedicalRecords(otherAccount2.address, 111);

    expect(data[0][0]).to.equal("https://pinata/ipfs/123");
  });

  it("Get Patient Medical Record", async function () {
    const { iDMedRec, owner, otherAccount, otherAccount2 } = await loadFixture(deployOneYearLockFixture);

    // Add doctor
    await iDMedRec.addDoctor(otherAccount.address, "https://pinata/ipfs/1", 123);

    // Connect to doctor account
    const doctor = iDMedRec.connect(otherAccount);

    // Add patient
    await doctor.addPatient(otherAccount2.address, "https://pinata/ipfs/121321bh", 111);

    // Add medical record
    await doctor.createMedicalRecord(otherAccount2.address, "https://pinata/ipfs/123", 111, 123);

    // Get medical record
    const data = await doctor.getMedicalRecords(otherAccount2.address, 111);

    expect(data[0][0]).to.equal("https://pinata/ipfs/123");
  });

  it("Add and Get Doctor", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await iDMedRec.addDoctor(otherAccount.address, "https://pinata/ipfs/1", 123);
    const data = await iDMedRec.getDoctor(otherAccount.address, 123);

    expect(data[1]).to.equal("https://pinata/ipfs/1");
  });

  it("Add and Get Patient", async function () {
    const { iDMedRec, otherAccount } = await loadFixture(deployOneYearLockFixture);

    await iDMedRec.addPatient(otherAccount.address, "https://pinata/ipfs/1", 123);
    const data = await iDMedRec.getPatient(otherAccount.address, 123);

    expect(data[1]).to.equal("https://pinata/ipfs/1");
  });
});
