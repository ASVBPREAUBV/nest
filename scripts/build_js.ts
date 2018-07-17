import * as browserify from "browserify";
import * as fs from "fs";
import * as path from "path";

const absolutePath = path.resolve('./src/user/user.client.ts');
const bundleFs = fs.createWriteStream(__dirname + '/bundle.js');

console.log(absolutePath);

browserify()
    .add(absolutePath)
    .plugin('tsify')
    .bundle()
    .pipe(bundleFs);

bundleFs.on('finish', function() {
    console.log('finished writing the browserify file');
});