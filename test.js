
function returnStack() {
    let expression = "- 3 * 4 5"
    if (!expression) {
        return 0;
    }
    var sol = expression.split(" ");
    var stack = [];
    sol.reverse();
    for (let element of sol) {
        if (!isNaN(element)) {
            stack.push(parseInt(element));
        }
        else if (element == '*') {
            let left = stack.pop();
            let right = stack.pop();
            stack.push(left * right);
        }
        else if (element == '/') {
            let left = stack.pop();
            let right = stack.pop();
            stack.push(left / right);
        }
        else if (element == '-') {
            let left = stack.pop();
            let right = stack.pop();
            stack.push(left - right);
        }
        else if (element == '+') {
            let left = stack.pop();
            let right = stack.pop();
            stack.push(left + right);
        }
    
    }
    return stack.pop();   
}


console.log(returnStack())
