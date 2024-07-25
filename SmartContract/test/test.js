const Dtsp = artifacts.require("Dtsp");

contract("Dtsp", (accounts) => {
  it("should store and retrieve analysis", async () => {
    const dtspInstance = await Dtsp.deployed();
    
    await dtspInstance.storeAnalysis(
      "example_sha_256",
      "example_md5",
      "example_flagged_malicious",
      "example_file_type",
      12345,
      "example_last_analysis",
      { from: accounts[0] }
    );

    const analysis = await dtspInstance.retrieveAnalysis("example_sha_256");
    
    assert.equal(analysis[0], "example_md5", "MD5 does not match");
    assert.equal(analysis[1], "example_flagged_malicious", "Flagged malicious does not match");
    assert.equal(analysis[2], "example_file_type", "File type does not match");
    assert.equal(analysis[3].toNumber(), 12345, "Size does not match");
    assert.equal(analysis[4], "example_last_analysis", "Last analysis does not match");
  });
});
