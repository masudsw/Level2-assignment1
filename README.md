### How does TypeScript help in improving code quality and project maintainability?
---

TypeScript is a programming language built on top of JavaScript. The core difference between JavaScript and TypeScript is that TypeScript is strictly typed, whereas JavaScript is loosely typed. This gives developers safeguards — you can think of it like riding a bike with a helmet!
---
---
Let’s look at an example:
---
In JavaScript, if we write the following code, it won’t show any error message:
---
<pre> 
let age = "12";
console.log(age * 2);  // This gives NaN (Not a Number)
 </pre>
The code will compile, but when we run it, we get a runtime error (or unexpected behavior).
However, in TypeScript, if we write similar code:
<pre> 
let age: number = "12"; // Error! "12" is a string, not a number
 </pre>
---
TypeScript will immediately catch the error during compilation — preventing a potential runtime issue.
### But why do we need TypeScript if JavaScript has worked for so long?
---

![image](image.png)
Over time, projects have become larger and involve multiple developers. According to the common cost vs. simplicity graph, JavaScript may seem cheaper and simpler at the start. But as the project grows, the cost of fixing bugs and maintaining quality increases significantly.
On the other hand, TypeScript requires more upfront effort due to type engineering and stricter rules. However, over time, it reduces costs by improving code quality, catching bugs early, making code easier to understand, and providing better tooling and refactoring support.
