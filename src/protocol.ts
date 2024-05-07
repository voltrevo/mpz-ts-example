import * as mpz from 'mpz-ts';

const circuitSrc = {
  'main.circom': `
    pragma circom 2.0.0;

    template Adder() {
        signal input a, b;
        signal output c;

        c <== a + b;
    }

    component main = Adder();
  `,
};

const circuit = mpz.Circuit.fromCircom(circuitSrc);

const parties = {
  alice: ['a'],
  bob: ['b'],
};

const protocol = new mpz.Protocol(circuit, parties);

export default protocol;
