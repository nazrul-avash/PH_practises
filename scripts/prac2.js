 const func = async () => {
    setTimeout(function test(){
        console.log("Hello World");
    },2000);
    console.log("This will be printed before the timeout function executes.");

};
let data = await fetch("https://catfact.ninja/fact");
data = await data.json();
console.log(data);
