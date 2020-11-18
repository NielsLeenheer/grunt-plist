module.exports = function(grunt) {
    const plist = require('plist');
    const fs = require('fs');
    const merge = require('lodash.merge');

    grunt.registerMultiTask('plist', async function() {
        let done = this.async();

        let source = plist.parse(fs.readFileSync(this.data.file, 'utf8'));
        let destination = merge(source, this.data.properties);
        fs.writeFileSync(this.data.file, plist.build(destination), 'utf8');

        done(true);
    });
};
