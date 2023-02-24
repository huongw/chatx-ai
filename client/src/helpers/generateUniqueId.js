export default function generateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.random();
  const hexadecimalStr = randomNum.toString(16);

  return `id-${timestamp}-${hexadecimalStr}`;
}