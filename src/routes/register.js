import { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Pages from 'pages'
import LoadingSpinner from 'components/Spinner'

const Router = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Switch>
      <Redirect exact from='/' to='/dashboard' />
      <Route path='/dashboard' exact component={Pages.Dashboard} />
      <Route path='/wallet' exact component={Pages.Wallet} />
      <Route path='/404' component={Pages.NotFound} />
      <Redirect from='*' to='/404' />
    </Switch>
  </Suspense>
)

export default Router
