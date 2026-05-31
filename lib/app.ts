import packageInfo from '../package.json';
import env from './env';

const app = {
  version: packageInfo.version,
  name: 'Hive Enterprise',
  logoUrl: 'https://raw.githubusercontent.com/HiveCoder/hivecoder-enterprise-saas/master/public/logo.png',
  url: env.appUrl,
};

export default app;
