import Layout from "@/components/layout";
import { SidebarProvider } from "@/context/sidebarcontext";
import "@/styles/globals.css";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-pro/css/all.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  );
}
