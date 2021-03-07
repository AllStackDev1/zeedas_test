import { lazy } from 'react'

const Dashboard = lazy(() => import('./dashboard'))
const Wallet = lazy(() => import('./wallet'))
const NotFound = lazy(() => import('./404'))

const Pages = {
  Wallet,
  NotFound,
  Dashboard
}

export default Pages
