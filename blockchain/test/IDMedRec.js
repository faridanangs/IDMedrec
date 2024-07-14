const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Testing IDMedRec", function () {
  async function deployOneYearLockFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const IDMedRec = await ethers.getContractFactory("IDMedRec");
    const iDMedRec = await IDMedRec.deploy();

    return { iDMedRec, owner, otherAccount };
  }

  describe("Add Patient Medical Record\n", function () {
    describe("# Before adding record", () => {
      it("|", async function () {
        const { iDMedRec, owner } = await loadFixture(deployOneYearLockFixture);
        const data = await iDMedRec.getMedicalRecords(owner, 123);
        console.log(data);

      })
    })
    describe("# After adding record", () => {
      it("|", async function () {
        const { iDMedRec, owner } = await loadFixture(deployOneYearLockFixture);

        await iDMedRec.createMedicalRecord(owner, "https://pinata/ipfs/123", 123);
        await iDMedRec.createMedicalRecord(owner, "https://pinata/ipfs/123", 123);
        const data = await iDMedRec.getMedicalRecords(owner, 123);

        console.log(data);
        expect(Number(data[0][1])).to.equal(1);
      })
    })
  })


  describe("Get Patient Medical Record", function () {
    it("Get record", async function () {
      const { iDMedRec, owner } = await loadFixture(deployOneYearLockFixture);

      await iDMedRec.createMedicalRecord(owner, "https://pinata/ipfs/123", 123);
      await iDMedRec.createMedicalRecord(owner, "https://pinata/ipfs/123", 123);
      await iDMedRec.createMedicalRecord(owner, "https://pinata/ipfs/123", 123);
      await iDMedRec.createMedicalRecord(owner, "https://pinata/ipfs/123", 123);
      const data = await iDMedRec.getMedicalRecords(owner, 123);

      console.log("#Medical Records after:", data);
      expect(Number(data[0][1])).to.equal(1);
    })
  })
});
