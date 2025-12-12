import { showIncompatiblePluginDialog } from '@sanity/incompatible-plugin';
import { name, sanityExchangeUrl, version } from './package.json';

export default showIncompatiblePluginDialog({
  name: name,
  versions: {
    v4: version,
    v3: '^3.0.0',
    v2: '^2.1.0',
  },
  sanityExchangeUrl,
});
