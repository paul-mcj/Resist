// components
import MainNavigation from "@/components/layout/MainNavigation";

// local type definition for component
type LayoutProps = {
     children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
     return (
          <>
               <MainNavigation />
               <main>{children}</main>
          </>
     );
};
export default Layout;
