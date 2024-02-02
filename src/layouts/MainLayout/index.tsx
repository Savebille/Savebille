
import React from "react";
import CollapsibleSidebar from "../../components/CollapsibleSidebar";
import { Bell, MagnifyingGlass, ShoppingCart, Sliders } from "@phosphor-icons/react";
import Text from "../../components/Text";

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

{/* TODO : NavBar */}
      <div className="flex flex-col w-full relative">
        <div
          className={`flex bg-white h-[91px] shadow ${
            !isDesktop ? "sticky top-0 md:static" : "sticky top-0"
          } z-40`}>
              <div className="flex justify-between items-center bg-[#000000] w-full z-[150] ml-52 p-9 ">
                <div className="bg-[#FAFAFA] flex items-center justify-between p-5 w-[346px] rounded-md">
                    <div className="flex items-center">
                    <MagnifyingGlass size={32} />
                    <input type="text" className="bg-slate-50 h-10 w-[200px]"  />
                    </div>
                    <div className="bg-red">
                      <div className="bg-white">
                        <Sliders size={32} />
                      </div>
                    </div>
                </div>
                <div className="bg-red">
                    asdasdasd
                </div>

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
