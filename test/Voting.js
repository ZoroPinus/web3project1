// import hardhat library
const { ethers } = require("hardhat");

async function main() {
  // compile the smart contract
  const Ballot = await ethers.getContractFactory("Ballot");
  console.log("Compiling successful");

  // deploy the smart contract
  const proposalNames = ["Proposal 1", "Proposal 2", "Proposal 3"];
  const ballot = await Ballot.deploy(proposalNames);
  await ballot.deployed();
  console.log("Ballot contract deployed to:", ballot.address);

  // interact with the smart contract
  const chairperson = await ballot.chairperson();
  console.log("Chairperson:", chairperson);

  const voter1 = await ethers.provider.getSigner(1);
  await ballot.giveRightToVote(voter1.address);
  console.log("Voter 1 given the right to vote");

  const voter2 = await ethers.provider.getSigner(2);
  await ballot.giveRightToVote(voter2.address);
  console.log("Voter 2 given the right to vote");

  const delegate = await ethers.provider.getSigner(3);
  await ballot.giveRightToVote(delegate.address);
  console.log("Delegate given the right to vote");

  await ballot.delegate(delegate.address, { from: voter1.address });
  console.log("Voter 1 delegated their vote to the delegate");

  await ballot.vote(0, { from: delegate.address });
  console.log("Delegate voted for Proposal 1");

  const winningProposal = await ballot.winningProposal();
  console.log("Winning proposal index:", winningProposal.toString());

  const proposal = await ballot.proposals(winningProposal);
  console.log("Winning proposal name:", ethers.utils.parseBytes32String(proposal.name));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
