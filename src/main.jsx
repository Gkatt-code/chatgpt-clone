import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import SigninPage from './routes/signinPage/SigninPage.jsx'
import SignupPage from './routes/signupPage/SignupPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/", 
        element: <Homepage />
      },
      {
        path: "/sign-In/*", 
        element: <SigninPage />
      },
      {
        path: "/sign-Up/*", 
        element: <SignupPage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
