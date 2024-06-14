import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  introspection: {
    type: 'url',
    url: 'https://server.bad-belzig.smart-village.app/graphql',
    headers: {
      Authorization: 'Bearer xDmymxByHHENxUZegOan91GNPy3ZRvk0WY3aupCjRXs',
    },
  },
  website: {
    output: '/Users/wilimzig/Documents/Projects/smart-village-solutions.github.io/docs',
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, 'assets'),
    options: {
      siteRoot: '',
   },
  }
}
