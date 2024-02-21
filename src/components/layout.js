import MainHeader from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">
        <MainHeader />
        {children}
      </main>
    </div>
  );
};

export default Layout;
