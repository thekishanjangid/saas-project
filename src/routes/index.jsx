import { createBrowserRouter, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const Docs = lazy(() => import("../pages/Docs"));
const Workflows = lazy(() => import("../pages/Workflows"));
const Analytics = lazy(() => import("../pages/Analytics"));
const Settings = lazy(() => import("../pages/Settings"));
const Profile = lazy(() => import("../pages/Profile"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

// Loading Fallback
const PageLoader = () => (
  <div className="flex h-full w-full items-center justify-center p-8">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

// Wrap component in Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// Simple Generic Placeholder for sub-pages
const GenericPage = ({ title }) => (
  <div className="p-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p className="text-muted-foreground">Content for {title} will go here.</p>
  </div>
);

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/login",
    element: withSuspense(Login),
  },
  {
    path: "/signup",
    element: withSuspense(Signup),
  },
  
  // Protected Routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        children: [
          { index: true, element: withSuspense(Home) },
          { path: "tasks", element: <GenericPage title="My Tasks" /> },
          { path: "recent", element: <GenericPage title="Recent Items" /> },
          { path: "starred", element: <GenericPage title="Starred Items" /> },
          { path: "trash", element: <GenericPage title="Recycle Bin" /> },
        ]
      },
      {
        path: "docs",
        children: [
          { index: true, element: withSuspense(Docs) },
          { path: "drafts", element: <GenericPage title="Drafts" /> },
          { path: "archived", element: <GenericPage title="Archived Docs" /> },
        ]
      },
      {
        path: "workflows",
        children: [
          { index: true, element: withSuspense(Workflows) },
          { path: "templates", element: <GenericPage title="Workflow Templates" /> },
        ]
      },
      {
        path: "analytics",
        children: [
          { index: true, element: withSuspense(Analytics) },
          { path: "reports", element: <GenericPage title="Analytics Reports" /> },
        ]
      },
      {
        path: "settings",
        children: [
          { index: true, element: withSuspense(Settings) },
          { path: "security", element: <GenericPage title="Security Settings" /> },
        ]
      },
      {
        path: "profile",
        element: withSuspense(Profile),
      },
    ],
  },
]);
