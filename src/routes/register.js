import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Pages from 'pages'

const Router = () => (
  <React.Suspense fallback={<p>loading...</p>}>
    <Switch>
      <Redirect exact from='/' to='/dashboard' />
      <Route path='/dashboard' exact component={Pages.Dashboard} />
      <Route path='/404' component={Pages.NotFound} />
      <Redirect from='*' to='/404' />
    </Switch>
  </React.Suspense>
)

export default Router
