const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("IdMedRec", (m) => {
  const idMedrec = m.contract("IDMedRec", []);

  return { idMedrec };
});
