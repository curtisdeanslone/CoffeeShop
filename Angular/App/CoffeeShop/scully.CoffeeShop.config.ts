import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "CoffeeShop",
  outDir: './dist/static',
  routes: {
    '/product/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
    '/products/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};