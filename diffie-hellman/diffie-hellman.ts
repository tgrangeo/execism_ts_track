export class DiffieHellman {
  p!: number;
  g!: number;
  n!: number;
  totient!:number;

  isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  constructor(p: number, g: number) {
    if (p < 1 || p > 9999 || g < 1 || g > 9999) throw "";
    if (!this.isPrime(p) || !this.isPrime(g)) throw "";
    this.p = p;
    this.g = g;
    this.n = p * g;
    this.totient = (p - 1) * ( g - 1)
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey < 2 || privateKey >= this.p) {
      throw "";
    }
    return 0;
  }

  public getSecret(theirPublicKey: unknown, myPrivateKey: unknown): unknown {
    throw new Error("Remove this statement and implement this function");
  }
}
