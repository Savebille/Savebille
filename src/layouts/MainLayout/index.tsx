import React from "react";
import CollapsibleSidebar from "../../components/Sidebar";
import { Bell, MagnifyingGlass, ArrowDown } from "@phosphor-icons/react";
import Text from "../../components/Text";
import { UserButton, useUser } from "@clerk/clerk-react";
import Sidebar from "../../components/Sidebar";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = window.innerWidth > 768;

  const { user } = useUser();

  return (
    <div className="flex h-full relative">
      {isDesktop && (
        <div
          className={`md:flex md:flex-col md:fixed md:inset-y-0 z-[80] ${
            !isDesktop ? "hidden md:w-0" : "md:w-0"
          }`}
        >
          <Sidebar />
        </div>
      )}

      {/* TODO : NavBar */}
      <div className="flex flex-col w-full relative">
        <div
          className={`flex items-center justify-center bg-white  ${
            !isDesktop ? "sticky top-0 md:static" : "sticky top-0"
          } z-40`}
        >
          <div className="flex justify-between items-center  w-full z-[150] ml-60 px-10 h-[80px] border-b border-h-gray ">
            {/* Leftside */}
            <div className="bg-h-gray-input flex items-center justify-between p-2 w-[450px] rounded-md h-[42px]">
              <div className="flex items-center justify-between h-[20px] w-[320px] gap-2">
                <div className="flex justify-center items-center">
                  <MagnifyingGlass color="#233145" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Type here to search"
                  className="bg-h-gray-input h-full w-full border-h-info focus:outline-none text-h-secondary text-sm"
                />
              </div>

              <div className="bg-h-white h-[32px] w-[52px] rounded-lg py-1 flex justify-center items-center shadow">
                <Text size="medium" weight="semibold" color="primary">
                  ⌘ F
                </Text>
              </div>
            </div>

            {/* Rightside */}
            <div className="flex items-center justify-between">
              <button className="bg-h-gray-input rounded-full h-[42px] w-[42px] flex items-center justify-center mr-8 border-b  border-h-gray">
                <Bell size={20} />
              </button>

              <div className="flex items-center">
                <UserButton />
                <div className="flex flex-col ml-3">
                  <Text size="medium" weight="bold" color="primary">
                    {user?.firstName}
                  </Text>
                  <Text size="mini" color="secondary">
                    {user?.emailAddresses[0].emailAddress}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main
          className={`flex-1 h-full ${
            isDesktop ? "ml-60" : "ml-0"
          } pb-14 md:pb-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);
