import BlogRoute from '../apps/blog/router'
import OLSRoute from '../apps/ols/router'
import BlogMeta from '../apps/blog/_meta'
import OLSMeta from '../apps/ols/_meta'

export const Capp_Meta = [BlogMeta, OLSMeta];
export const Capp_Routes = [BlogRoute, OLSRoute];