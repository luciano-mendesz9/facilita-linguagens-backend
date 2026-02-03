import fs from 'fs'
import path from 'path'

function loadJson(dir: string) {
  const fullPath = path.resolve(dir)

  return fs.readdirSync(fullPath).reduce((acc, file) => {
    const content = fs.readFileSync(
      path.join(fullPath, file),
      'utf-8'
    )

    return {
      ...acc,
      ...JSON.parse(content),
    }
  }, {})
}

export const openApiDoc = {
  ...JSON.parse(
    fs.readFileSync(
      path.resolve('./src/docs/openapi.json'),
      'utf-8'
    )
  ),
  paths: loadJson('src/docs/paths'),
  components: {
    schemas: loadJson('src/docs/schemas'),
  },
}
