import P2PSocket from "../src/P2PSocket";
import protocol from "../src/protocol";

async function main() {
  const bob = new P2PSocket('bob');

  const session = protocol.join(
    'alice',
    { a: 3 },
    (_to, msg) => bob.send(msg), // bob is the only other party
  );

  bob.on('message', msg => session.handleMessage('bob', msg));

  const output = await session.output();

  console.log(output);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
