// function for setting default and changing text later
// temporarily, we are using index 0 as formal and index 1 as warm.

let text = [["Young-Kyung Kim","Young-Kyung Kim, or Y2K"],
["the Massachusetts Institute of Technology","MIT"],
["American politics and political methodology","nationalisms, emotions in politics, and racial and ethnic politics"],
["reach out","give me a nudge"],
[".","!"]]

function textSwap() {
    let tone;

    if (document.documentElement.classList.contains("friendly")) {
        tone = 0;
    } else {
        tone = 1;
    }

    for (const [index, x] of document.querySelectorAll("#bio span").entries()) {
        x.innerHTML = text[`${index}`][`${tone}`];
    }
}

// this can be generalized nicely using templates / string interpolation