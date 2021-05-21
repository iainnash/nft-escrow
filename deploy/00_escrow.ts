module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Escrow", {
    from: deployer,
    args: [],
    log: true,
  });
};
module.exports.tags = ["Escrow"];
