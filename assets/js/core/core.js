export default function html([first, ...strings], ...values){
    return values.reduce((acc,curr) => 
    [...acc, curr, strings.shift()] , 
    [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
 }
 