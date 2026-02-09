function capitalizeName(name: string) {
  return name
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// uso
const name = capitalizeName("lucas silva"); 
console.log(name); // Output: "Lucas Silva"
