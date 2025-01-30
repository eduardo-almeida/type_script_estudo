const primeiroNome = "Eduardo";

const sobrenome = "Almeida";

function teste1(name: string): void {
  console.log("Ola " + name);
}

function showNumbers22(a: number, b?: number, c?: number): void {
  console.log("A: " + a);
  if (b) {
    console.log("B: " + b);
  }
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers22(2);

teste1(primeiroNome);
