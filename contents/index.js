const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFiles = dir => {
    const files = fs.readdirSync(dir)
    let filelist = []

    files.forEach(file => {
        const markdownFile = fs.readFileSync(`contents/blog/${file}`, 'utf-8')
        const fileContents = parseMarkdown(markdownFile)
        const date = fileContents.date
        const slug = file
            .split('.')
            .slice(0, -1)
            .join('.')

        const obj = { date, slug }

        filelist.push(obj)
    })
    return filelist
}


const getPortfolioFiles = dir => {
  const files = fs.readdirSync(dir)
  let filelist = []

  files.forEach(file => {
    const markdownFile = fs.readFileSync(`contents/portfolio/${file}`, 'utf-8')
    const fileContents = parseMarkdown(markdownFile)
    const date = fileContents.date
    const slug = file
        .split('.')
        .slice(0, -1)
        .join('.')

    const obj = { date, slug }

    filelist.push(obj)
  })
  return filelist
}

/**
 * Write blogs json file
 */
const writeBlogs = async () => {
    const fileArray = await getFiles('contents/blog/')

    // Order array by date (default asc)
    const sortedArray = await fileArray.sort((a, b) => {
        return a.date.getTime() - b.date.getTime()
    })

    // Reverse array and write to JSON
    const reversedArray = await sortedArray.reverse()
    const jsonContent = await JSON.stringify(reversedArray)

    fs.writeFile('contents/blogs.json', jsonContent, err => {
        if (err) throw new Error(err)
    })
}

const writePortfolios = async () => {
  const fileArray = await getPortfolioFiles('contents/portfolio/')

  // Order array by date (default asc)
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })

  // Reverse array and write to JSON
  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile('contents/portfolios.json', jsonContent, err => {
    if (err) throw new Error(err)
  })
}

writeBlogs()
writePortfolios()