const tsJest = require('ts-jest');
const t = tsJest.createTransformer();

module.exports = {
   process(fileContent, filePath, jestConfig) {
      const res = t.process(fileContent, filePath, jestConfig)
      console.log(filePath);
      return res;
   }
 }