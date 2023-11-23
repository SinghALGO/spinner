let s = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
let multiple = 100;
for (let i in s) {
  setTimeout(() => {
    process.stdout.write(`\r${s[i]}   `);
  }, multiple);
  multiple += 200;
}
