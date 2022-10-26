
export const toPascalCase = (sentence) => {if(!sentence) return sentence; return sentence
   .split(' ')
   .map(word => word[0]
   .toUpperCase()
   .concat(word.slice(1)))
   .join('');}
