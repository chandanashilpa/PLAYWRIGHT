function hoistVar() {
    console.log(x);
    var x = 10;
}
hoistVar(); // Output: undefined

function hoistLet() {
    console.log(y);
    let y = 20;
}
//hoistLet(); // ReferenceError: Cannot access 'y' before initialization