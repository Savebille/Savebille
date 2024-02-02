
import React from "react";
import CollapsibleSidebar from "../../components/CollapsibleSidebar";
import { Bell, Image, MagnifyingGlass } from "@phosphor-icons/react";
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
          className={`flex items-center justify-center bg-white shadow ${
            !isDesktop ? "sticky top-0 md:static" : "sticky top-0"
          } z-40`}> 
              <div className="flex justify-between items-center bg-h-white w-full z-[150] ml-52 p-9 h-[100px] ">
          {/* Leftside */}
                <div className="bg-h-gray-input flex items-center justify-between p-5 w-[500px] rounded-md h-[55px] m-2">
                    <div className="flex items-center">
                      <MagnifyingGlass size={20} className="mr-4"/>
                      <input type="text" placeholder="Type here to search" className="bg-h-gray-input h-10 w-[200px] border-h-info focus:outline-none text-h-secondary text-[18px]"  />
                    </div>
                    <div className="bg-h-white">
                      <div className="bg-h-white h-[32px] w-[52px] rounded flex justify-center items-center ">
                        ⌘ F 
                      </div>
                    </div>
                </div>
          {/* Rightside */}
                <div className="bg-h-white flex items-center justify-between p-5 w-[500px] h-[40px]">
                    <div className="bg-h-white flex items-center "> 
                      <div className="bg-h-gray-input rounded-full h-[42px] w-[42px] flex items-center justify-center mr-10">
                      <Bell size={32}  />
                      </div>
                        <Image size={70} />
                        <div className="flex flex-col ml-4 mt-2">
                          <Text
                            size="large"
                            weight="bold" >
                              Martin Rubiano
                          </Text>
                          <Text >
                            martin.savebille@gmail.com
                          </Text>
                        </div>
                    </div>
                    
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
