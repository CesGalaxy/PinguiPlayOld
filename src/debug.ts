const modifiers = {
    "Reset": "\x1b[0m",
    "Bold": "\x1b[1m",
    "Dim": "\x1b[2m",
    "Underscore": "\x1b[4m",
    "Blink": "\x1b[5m",
    "Reverse": "\x1b[7m",
    "Hidden": "\x1b[8m",

    "FgBlack": "\x1b[30m",
    "FgRed": "\x1b[31m",
    "FgGreen": "\x1b[32m",
    "FgYellow": "\x1b[33m",
    "FgBlue": "\x1b[34m",
    "FgMagenta": "\x1b[35m",
    "FgCyan": "\x1b[36m",
    "FgWhite": "\x1b[37m",
    "FgGray": "\x1b[90m",

    "BgBlack": "\x1b[40m",
    "BgRed": "\x1b[41m",
    "BgGreen": "\x1b[42m",
    "BgYellow": "\x1b[43m",
    "BgBlue": "\x1b[44m",
    "BgMagenta": "\x1b[45m",
    "BgCyan": "\x1b[46m",
    "BgWhite": "\x1b[47m",
    "BgGray": "\x1b[100m",
}

// Crete a function that receives a string with comma separated modifiers, and a string to be modified
// and returns the modified string
function applyModifiers(modifiersString: string, str: string) {
    const modifiersArray = modifiersString
        .split(",")
        // @ts-ignore
        .filter(modifier => modifiers[modifier.trim()])
        // @ts-ignore
        .map(modifier => modifiers[modifier.trim()]);

    return modifiersArray.join("") + str + modifiers.Reset
}

// Black - Red - Green - Yellow - Blue - Magenta - Cyan - White - Gray
function consoleDebugLog(...args: string[]) {
    if (args.length % 2 != 0) {
        // Remove last element
        args.pop();

        // Rerun the function with the new args
        consoleDebugLog(...args, "BgCyan,Bold,Dim", String(Math.floor(Math.random() * 100)));
        return;
    }

    let buffer = "";

    for (let i = 0; i < args.length; i += 2) {
        buffer += applyModifiers(args[i], args[i + 1]) + " ";
    }

    console.log(buffer);
}

global.consoleDebugLog = consoleDebugLog;