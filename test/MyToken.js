const { expect } = require("chai");

describe("MyToken", function () {
  it("Should return the new token once deployed", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();

    expect(await myToken.name()).to.equal("MyToken");
  });
});
