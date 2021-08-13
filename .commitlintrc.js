module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        /** Enable having links in the footer of the commit message */
        'footer-max-line-length': [
            0,
            "always"
        ]
    },
    parserPreset: {
        parserOpts: {
            noteKeywords: ['link:'] // Create a custom keyword to distinguish the footer
        }
    }
}