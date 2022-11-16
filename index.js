const fs = require('fs');
const readline = require("readline");
// const interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
const replaceThis = 'superman';
const replaceWith = "batman";
const preview = true;

try {
    let _rename = (item1, newFile1) => {
        fs.rename("data/" + item1, newFile1, () => {
            console.log("Rename Successful")
        })
    }


    fs.readdir("data/", (err, data) => {
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
            if (!preview) {
                _rename(item, newFile);
            }
            else {
                if (("data/" + item) !== newFile) {
                    console.log("data/" + item + " will be renamed to " + newFile + "\n");
                    _rename(item, newFile)
                    // interface.question("Do you wish to proceed? Y/N   ", async (ans) => {

                    //     if (ans.toUpperCase === 'Y') {
                    //         _rename(item, newFile)
                    //     }
                    // });
                }
                else {
                    console.log("This has been already renamed")
                }
            }

        }
        

    })

} catch (err) {
    console.error(err)
}
