import Emitter from "./Emitter";

type Events = {
  message(m: Uint8Array): void
};

export default class P2PSocket extends Emitter<Events> {
  constructor(_peer: string) {
    super();

    throw new Error('Not implemented');
  }

  send(_msg: Uint8Array) {
    throw new Error('Not implemented');
  }
}
