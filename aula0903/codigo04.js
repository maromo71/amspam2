process.stdin.on("data", (data) => {
    let limite = parseInt(data.toString());
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
});
process.stdout.write("Digite algo: ");
