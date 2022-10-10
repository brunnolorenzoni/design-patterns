import { ComponentWithBackReference } from "./ComponentWithBackReference";
import { Prototype } from "./Prototype";

const p1 = new Prototype();
p1.primitive = 245;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();

if (p1.primitive === p2.primitive) {
  console.log("Primitive field values have been carried over to a clone");
} else {
  console.log("Primitive field values have not been copied");
}

if (p1.component === p2.component) {
  console.log("Simple component has not been cloned");
} else {
  console.log("Simple component has been cloned");
}

if (p1.circularReference === p2.circularReference) {
  console.log("Component with back reference has not been cloned");
} else {
  console.log("Component with back reference has been cloned");
}

if (p1.circularReference.prototype === p2.circularReference.prototype) {
  console.log("Component with back reference is linked to original object");
} else {
  console.log("Component with back reference is linked to the clone.");
}
