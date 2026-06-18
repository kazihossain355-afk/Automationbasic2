// function parent() {
//     const userName = "kazi";
//     function child(parem) {
//         const platform = "zoom";
//         console.log(username);
//         console.log(platform);
//     }
//     child();
// }
// parent();

function parent() {
    const userName = "kazi";

    function child() {
        const platform = "zoom";

        console.log(userName);
        console.log(platform);
    }

    child();
}

parent();