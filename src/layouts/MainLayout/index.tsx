import React from "react";
import CollapsibleSidebar from "../../components/CollapsibleSidebar";
import { Bell, ShoppingCart } from "@phosphor-icons/react";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  const isDesktop = window.innerWidth > 768;

  return (
    <div className="flex h-full relative">
      {isDesktop && (
        <div
          className={`md:flex md:flex-col md:fixed md:inset-y-0 z-[80] ${
            !isDesktop ? "hidden md:w-0" : "md:w-0"
          }`}
        >
          <CollapsibleSidebar />
        </div>
      )}

      <div className="flex flex-col w-full relative">
        <div
          className={`flex items-center justify-center bg-white shadow ${
            !isDesktop ? "sticky top-0 md:static" : "sticky top-0"
          } z-40`}
        >
          <div className="md:hidden">
					<ShoppingCart
                size={26}
                color={"var(--h-blue-70)"}
                className="mr-3"
              />
          </div>
          <div className="flex w-full justify-end py-2.5">
            <button onClick={() => {}}>
              <ShoppingCart
                size={26}
                color={"var(--h-blue-70)"}
                className="mr-3"
              />
            </button>
            <button>
              <Bell size={26} color={"var(--h-blue-70)"} className="mr-4" />
            </button>
          </div>
        </div>

        <main
          className={`flex-1 h-full ${
            isDesktop ? "ml-[60px]" : "ml-0"
          } pb-14 md:pb-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);
