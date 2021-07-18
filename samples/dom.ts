import { DOMParser } from 'deno_dom/deno-dom-wasm.ts';

const doc = new DOMParser().parseFromString(`
  <h1>Hello World!</h1>
  <p>Hello from <a href="https://deno.land/">Deno!</a></p>
`, "text/html")!;

const p = doc.querySelector("p")!;

console.log(p.textContent); // "Hello from Deno!"
console.log(p.childNodes[1].textContent); // "Deno!"

p.innerHTML = "DOM in <b>Deno</b> is pretty cool";
console.log(p.children[0].outerHTML); // "<b>Deno</b>"