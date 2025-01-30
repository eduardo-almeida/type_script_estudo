const primeiroNome = "Eduardo";

const sobrenome = "Almeida";

function teste(name: string) {
  console.log("Ola " + name);
}

function showNumbers(a: number, b?: number, c?: number) {
  console.log("A: " + a);
  if (b) {
    console.log("B: " + b);
  }
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, c : 2);

teste(primeiroNome);
