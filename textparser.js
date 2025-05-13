let fs = require('fs')
let path = require('path')

let pathArg = process.argv[2]

function readFile(file, vuefile) {
//  let pathname = path.dirname(file)
  let contents = fs.readFileSync(file).toString()

  let inArticle = false
  // Go line by line
  contents.split(/\r?\n/).forEach(line => {
    if (line.includes('<article>')) {
      inArticle = true
    }
    if (line.includes('</article>')) {
      inArticle = false
    }
    if (inArticle && vuefile) {
      let regex = /(&nbsp;|<([^>]+)>)/ig
      line = line.replace(regex, '')
      if (line.trim().length) {
        console.log(line)
      }
    }
    else if (!vuefile) {
      let regex = /(&nbsp;|<([^>]+)>)/ig
      line = line.replace(regex, '')
      if (line.trim().length) {
        console.log(line)
      }
    }
  })
}

var walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir)
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    }
    else if (file.includes('.vue')){
      filelist.push(path.join(dir, file))
    } else if (file.includes('.htm')) {
      filelist.push(path.join(dir, file))
    }
  })
  return filelist
}

if (pathArg) {
  let filelist = []
  walkSync(pathArg, filelist)
  filelist.map(file => {
    readFile(file, file.includes('.vue'))
  })
}

// node textparser.js src > words.txt
// https://tagcrowd.com/

// remove words
// com copyright edt gt lt quot www yahoo