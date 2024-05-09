import * as c2a from 'circom-2-arithc';
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

const circuit = c2a.Circuit.compile(circuitSrc);

const mpcSettings = [
  {
    name: 'alice',
    inputs: ['a'],
    outputs: ['c'],
  },
  {
    name: 'bob',
    inputs: ['b'],
    outputs: ['c'],
  },
];

const protocol = new mpz.Protocol(circuit.toMpzCircuit(), mpcSettings);

export default protocol;
