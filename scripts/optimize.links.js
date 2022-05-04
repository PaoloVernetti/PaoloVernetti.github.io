let fs = require('fs');
let path = require('path');

let docs = path.join(__dirname, "..", "docs");

function findHtmlFiles(to) {
  let results = [];

  let items = fs.readdirSync(to);

  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    
    if (fs.statSync(path.join(to, item)).isFile() && path.extname(path.join(to, item)) === ".html") {
      results.push(path.join(to, item))
    } 

    if (fs.statSync(path.join(to, item)).isDirectory()) {
      let res = findHtmlFiles(path.join(to, item));

      results = results.concat(res);
    }
  }

  return results;
}


function optimizeLinks(files) {
  for (let index = 0; index < files.length; index++) {
    let file = files[index];

    let data = fs.readFileSync(file, { encoding: "utf-8" });

    let hrefmatches = data.match(/href="\//gm)

    if (hrefmatches) {
      for (let i = 0; i < hrefmatches.length; i++) {
        data = data.replace('href="/', 'href="');
      }
    }

    let srcmatches = data.match(/src="\//gm);

    if (srcmatches) {
      for (let i = 0; i < srcmatches.length; i++) {
        data = data.replace('src="/', 'src="');
      }
    }

    fs.writeFileSync(file, data, { encoding: "utf-8" });
  }
}

let htmlsFiles = findHtmlFiles(docs);

optimizeLinks(htmlsFiles)