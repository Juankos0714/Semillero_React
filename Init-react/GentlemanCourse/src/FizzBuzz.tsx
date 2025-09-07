const FizzBuzz = (num: number) => {
    
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz"; }
  else if (num % 3 === 0) {
    return "Fizz"; }
  else if (num % 5 === 0) {
    return "Buzz"; }
  else {
    return num; }
}
const FizzBuzz2 = (num: number) => {
    let result = "";
  if (num % 3 === 0) {
    result += "Fizz"; }
  else if (num % 5 === 0) {
    result += "Buzz"; }
  return result || num;
}
const Fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
function fib(n: number): number {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}
const fib1 = (n: number, memo: Record<number, number> = {}): number =>
  n <= 1 ? n : (memo[n] ?? (memo[n] = fib1(n - 1, memo) + fib1(n - 2, memo)));
const anagrama = (str: string): string[] => {
  if (str.length <= 1) return [str];
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1); 
    for (const perm of anagrama(remaining)) {
      result.push(char + perm);
      }
    }
  return Array.from(new Set(result));
}
anagrama("abc");
FizzBuzz(15);
FizzBuzz2(15);
Fibonacci(10);
fib(10);
fib1(10);
export {FizzBuzz, FizzBuzz2};
