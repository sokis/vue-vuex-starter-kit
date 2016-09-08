import { normalizeCasing } from '../../src/util/text-helper';

module.exports = {
  description() {
    return '创建vue组件';
  },
  fileMapTokens() {
    return {
      __style__: (options) => normalizeCasing(options.entity.name, 'dashes')
    };
  }
};