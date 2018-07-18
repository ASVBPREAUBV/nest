import * as browserify from "browserify";
import * as fs from "fs";
import * as path from "path";

export const build = () => {
    const absolutePath = path.resolve('./src/user/user.client.ts');
    const absolutePath_out = path.resolve('./src/user/static/user.bundle.js');
    const bundleFs = fs.createWriteStream(absolutePath_out);

    console.log(absolutePath);

    browserify()
        .add(absolutePath)
        .plugin('tsify')
        .bundle()
        .pipe(bundleFs);

    bundleFs.on('finish', function () {
        console.log('finished writing the browserify file');
    });
}