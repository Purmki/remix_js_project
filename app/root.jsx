import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from "@remix-run/react";
import MainNavigation from "./components/mainNavigation";
import stylesheet from "./styles/tailwind.css?url";
import MainFooter from "./components/mainFooter";


export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <header>
        <MainNavigation />  
        </header>
        {children}
        <footer>
          <MainFooter />
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}


// export function ErrorBoundary() {
// const error = useRouteError();
// return (
//   <html lang="en">
//     <head>
//       <Meta />
//       <Links />
//       <title>An error occurred!</title>
//     </head>
//     <body>
//         <IconError />
//         <div>
//           <h4>{error?.message}</h4>
//         </div>
//       <ScrollRestoration />
//       <Scripts />
//       <LiveReload />
//     </body>
//   </html>
// );
// }
