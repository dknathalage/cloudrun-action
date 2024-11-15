const childProcess = require("child_process");
const os = require("os");
const process = require("process");
const core = require("@actions/core");

function chooseBinary() {
  const platform = os.platform();
  const arch = os.arch();

  if (platform === "linux" && arch === "x64") {
    return `${actio}/main-linux-amd64`;
  }
  if (platform === "linux" && arch === "arm64") {
    return `main-linux-arm64`;
  }
  if (platform === "windows" && arch === "x64") {
    return `main-windows-amd64`;
  }
  if (platform === "windows" && arch === "arm64") {
    return `main-windows-arm64`;
  }

  console.error(
    `Unsupported platform (${platform}) and architecture (${arch})`
  );
  process.exit(1);
}

function main() {
  const action = core.getInput("action");
  const binary = chooseBinary();
  const mainScript = `${__dirname}/${action}/${binary}`;
  const spawnSyncReturns = childProcess.spawnSync(mainScript, {
    stdio: "inherit",
  });
  const status = spawnSyncReturns.status;
  if (typeof status === "number") {
    process.exit(status);
  }
  process.exit(1);
}

if (require.main === module) {
  main();
}
