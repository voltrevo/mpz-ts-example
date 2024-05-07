import P2PSocket from "../src/P2PSocket";
import protocol from "../src/protocol";

async function main() {
  const alice = new P2PSocket('alice');

  const session = protocol.join(
    'bob',
    { b: 5 },
    (_to, msg) => alice.send(msg), // alice is the only other party
  );

  alice.on('message', msg => session.handleMessage('alice', msg));

  const output = await session.output();

  console.log(output);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
