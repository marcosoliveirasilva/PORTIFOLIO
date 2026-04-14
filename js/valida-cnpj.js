export default function isCNPJ(campo) {
  const cnpj = campo.value.replace(/\D+/g, '');

  if (!checkSize(cnpj)) return false;
  if (!isRepeatedSequence(cnpj)) return false;
  if (!checkDigits(cnpj)) return false;

  return true;
}

function checkSize(cnpj) {
  return cnpj.length === 14;
}

function isRepeatedSequence(cnpj) {
  return !/^(\d)\1+$/.test(cnpj);
}

function calculateDigit(cnpjParcial) {
  let soma = 0;
  let peso = cnpjParcial.length - 7;

  for (let i = 0; i < cnpjParcial.length; i++) {
    soma += cnpjParcial[i] * peso--;
    if (peso < 2) peso = 9;
  }

  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

function checkDigits(cnpj) {
  const base = cnpj.slice(0, 12);
  const digitos = cnpj.slice(12);

  const digito1 = calculateDigit(base);
  const digito2 = calculateDigit(base + digito1);

  return digitos === `${digito1}${digito2}`;
}

