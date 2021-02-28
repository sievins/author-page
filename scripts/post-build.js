// preload fonts so we don't have to wait for the browser to parse all the html and css before loading them

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const toPosixFormat = pathString => pathString.split(path.sep).join(path.posix.sep)

const assets = glob.sync(path.join(__dirname, '../build/static/media/*.otf'))
  .map((assetPath) => {
    return toPosixFormat(path.relative(path.join(__dirname, '../build'), assetPath))
  })

const pathToEntry = path.join(__dirname, '../build/index.html')
const splitBy = '</title>'

const builtHTMLContent = fs.readFileSync(pathToEntry).toString()

const parts = builtHTMLContent.split(splitBy)

const fileWithPreload = [
  parts[0],
  splitBy
]

for (const link of assets) {
  fileWithPreload.push(`<link rel="preload" href="./${link}" as="font">`)
}

fileWithPreload.push(parts[1])

fs.writeFileSync(pathToEntry, fileWithPreload.join(''))
