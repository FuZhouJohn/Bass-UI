const { kebabCase } = require('lodash');

const Router = {
  Basic: ['Button'],
  Form: ['Switch'],
  Others: ['Dialog'],
};

function getRouterConfig(langPrefix = '/') {
  return [
    {
      text: langPrefix === '/' ? '介绍' : 'Introduction',
      link: `${langPrefix}`,
    },
    ...Object.entries(Router).map(([text, children]) => ({
      text,
      children: children.map((componentsName) => ({
        link: `${langPrefix}${kebabCase(text)}/${kebabCase(componentsName)}/`,
        text: componentsName,
      })),
    })),
  ];
}

module.exports = {
  getRouterConfig,
};
