# mpz-example

Example project using [`mpz-ts`](https://www.npmjs.com/package/mpz-ts).

## Usage

First install:

```
$ npm install
```

Then run these concurrently (on different machines if you like):

```
$ npm run alice
{ c: 8 }
```

```
$ npm run bob
{ c: 8 }
```

At least, that's the expected future output. The `mpz` module is not yet
implemented.

`P2PSocket` also needs an implementation within this project.
