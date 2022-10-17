require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/EaiDXSmmC44xxy0dDEnzc-_s2aatWz-t",
      accounts: [
        "39aa0578844491a7527faf07eed7d796784893f7c2fb0920caeb6cf1d497958d",
      ],
    },
  },
};
