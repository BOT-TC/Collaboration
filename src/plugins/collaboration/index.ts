import { ref } from 'vue'
// plugins/collaboration/index.ts
// export default {
//   install: (app) => {
//     app.config.globalProperties.$collaboration = {
//       capps: []
//     }
//   }
// }

export function collaboration(app, options) {
  app.config.globalProperties.$capps = options.capps
}
