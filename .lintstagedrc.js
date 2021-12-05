module.exports = {
    "src/**/*.{ts,tsx,js}": [
        "prettier --ignore-path ./.prettierignore --write",
        "tsc-files --noEmit",
        `next lint --fix --file ${filenames
          .map((file) => file.split(process.cwd())[1])
          .join(' --file ')}`,
    ]
}