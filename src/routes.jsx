import App from './App.jsx'
import Settings from './Settings.jsx'
import NotFound from './NotFound.jsx'
import Layout from './Layout.jsx'
import { ChildCare } from '@mui/icons-material'

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {    
        path: "*",
        element: <NotFound />
      }
    ]
  }
]

export default routes