// importing and exporting modules in ts
// exporting


export function add(x: number, y: number): number{
    return x+y;
}

/*

    if you see this error:
        A top-level 'export' modifier cannot be used on value declarations in a
        CommonJS module when 'verbatimModuleSyntax' is enabled. ts(1287)

    either:
        1. Switch to ES Modules (Recommended)
            in package.json
                instead of   :  "type": "commonjs"
                set          :  "type": "module"
        2. Use CommonJS Syntax  module.exports = { add };
            in tsconfig.json
                set          :  "verbatimModuleSyntax": false,

*/