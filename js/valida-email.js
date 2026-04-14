export default function checkEmail(campo) {
  if (!campo.value) return false;

  const email = campo.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}