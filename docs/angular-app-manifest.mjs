
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Site_vitrine_yc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Site_vitrine_yc/home",
    "route": "/Site_vitrine_yc"
  },
  {
    "renderMode": 2,
    "route": "/Site_vitrine_yc/home"
  },
  {
    "renderMode": 2,
    "route": "/Site_vitrine_yc/services"
  },
  {
    "renderMode": 2,
    "route": "/Site_vitrine_yc/about_us"
  },
  {
    "renderMode": 2,
    "route": "/Site_vitrine_yc/contact"
  },
  {
    "renderMode": 2,
    "route": "/Site_vitrine_yc/estimate_request"
  },
  {
    "renderMode": 2,
    "route": "/Site_vitrine_yc/faq"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 35717, hash: 'f018dfca2605eab4a34a7ad76a470caefdcad3e7e321f341f8c05912d12009a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17295, hash: 'f59fd2ce501f5100f53f7d8e4a057ba4a6f07b19c202b093abc03811070f85cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about_us/index.html': {size: 61598, hash: 'ae35e2e015102b9b9a3c517b4fd3e49aa74e219d363c8bd64be3744f150c53f5', text: () => import('./assets-chunks/about_us_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 61533, hash: '249d643c5b2fbb4f25cd49779c1bec35ae72ea1421f0f152ced2a8cc036e4312', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 61452, hash: 'b1e70fc87bf81c5443c91968792b01dbdca1c40663decf4d05631921cb63db90', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 59819, hash: 'c0422503ae04f19901a810022404839b14b7d8f162ca48f2bd8c8baf1688d0b4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'estimate_request/index.html': {size: 144421, hash: '69bc5a91d0dd2597ad40f7d780e4a5d2c0c827b566b12cf4738d6a34f85bab3e', text: () => import('./assets-chunks/estimate_request_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 58046, hash: '00e0eb738694733ba9882f65793497b6a30ffd5e5ce804f34a4720d6d4890a53', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-DRL5KV35.css': {size: 36745, hash: 'nhVQNswUc4k', text: () => import('./assets-chunks/styles-DRL5KV35_css.mjs').then(m => m.default)}
  },
};
