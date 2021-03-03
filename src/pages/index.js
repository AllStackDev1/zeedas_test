import { lazy } from 'react'

const Dashboard = lazy(() => import('./dashboard'))
const NotFound = lazy(() => import('./404'))

const Pages = {
  NotFound,
  Dashboard
}

export default Pages
