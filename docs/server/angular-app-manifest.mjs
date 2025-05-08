
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/yesil-conseil/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/yesil-conseil/home",
    "route": "/yesil-conseil"
  },
  {
    "renderMode": 2,
    "route": "/yesil-conseil/home"
  },
  {
    "renderMode": 2,
    "route": "/yesil-conseil/services"
  },
  {
    "renderMode": 2,
    "route": "/yesil-conseil/about_us"
  },
  {
    "renderMode": 2,
    "route": "/yesil-conseil/contact"
  },
  {
    "renderMode": 2,
    "route": "/yesil-conseil/estimate_request"
  },
  {
    "renderMode": 2,
    "route": "/yesil-conseil/faq"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 35715, hash: '40595f1d7d7f39d1ca6083db27d2b1dd97099f518256c408406da57e52c9ab66', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17293, hash: 'fc8826e6b0f25de943e4562493856b1249348535d01188b7973a637bdd837f9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 61511, hash: '627bc5e3a33ba1637267d10f6b8744aff75e793c5461f66985bf2b99d5ce34aa', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'estimate_request/index.html': {size: 144409, hash: '7445305cef599e78aa74c80c0c62f70f20398cfd8e631d71382f6ea86ee98c81', text: () => import('./assets-chunks/estimate_request_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 59809, hash: '613a66162b88594a6648bb2f0b35a28c8d8a04d7277f8a6c5f64c15123a061ab', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about_us/index.html': {size: 61580, hash: '0e149094361a855e0814c882577a86dd8445c730b6b0d6e51d094b84100f9b83', text: () => import('./assets-chunks/about_us_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 61432, hash: '270014215a18278064e14f78e455b10a12309c78ca6e36133eabe85725d7615b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 58034, hash: '3a63e0d621c8b5fd7bb194a8f250e7d25748c7427667ecf285c12ae839e3eda6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-DRL5KV35.css': {size: 36745, hash: 'nhVQNswUc4k', text: () => import('./assets-chunks/styles-DRL5KV35_css.mjs').then(m => m.default)}
  },
};
