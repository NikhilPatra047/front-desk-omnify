"use client";

import Image from "next/image";
import { Frame, app_logo, arrow_down, arrow_left_right, calendar_days, ellipse, globe, help_circle, hourglass, inbox, layout_dashboard, link_icon, sidebar_icon } from "../../../../public";
import { useSidebarContext } from "@/app/_context/context";
import { ReactNode } from "react";

function SidebarHeader() {
  const Sidebar = useSidebarContext();
  return (
    <div className={`${Sidebar?.sidebar? "justify-between": "justify-center"} flex items-center p-4`}>
      <div className={`flex items-center ${Sidebar?.sidebar && "gap-2"}`}>
        <Image height={18} width={18} className={`${!Sidebar?.sidebar && "hidden"}`} src={app_logo} alt="Front-Desk" />
        <button className={`${Sidebar?.sidebar && "hidden"} mx-auto`} onClick={Sidebar?.handleSidebar} type="button">
          <Image height={18} width={18} src={app_logo} alt="Front-Desk" />
        </button>
        <h1 className={`${!Sidebar?.sidebar && "hidden"}`}>Front-Desk</h1>
      </div>
      <button className={`${!Sidebar?.sidebar && "hidden"}`} type="button" onClick={Sidebar?.handleSidebar}><Image src={sidebar_icon} alt="close or open sidebar" /></button>
    </div>
  )
}

function LocationSetter() {
  const Sidebar = useSidebarContext();
  return (
    <div className="p-2">
      <div className="relative">
        <div className="flex items-center border-b-[1px] border-b-[--tertiary-color] drop-shadow-lg rounded-[6px] w-full absolute z-10 bg-white p-2 justify-between">
          <p className={`text-[0.75rem] font-medium text-primary-color ${!Sidebar?.sidebar && "hidden"}`}>Location Name</p>
          <Image height={18} width={18} className={`${!Sidebar?.sidebar && "mx-auto"}`} src={arrow_left_right} alt="" />
        </div>
        <div className="bg-[#F1F5F9] relative top-[30px] p-2 w-[90%] mx-auto drop-shadow-lg border-[1px] border-gradient-fill rounded-[4px]">
          <div className={`flex items-center gap-2 ${!Sidebar?.sidebar && "hidden"}`}>
            <p className="text-primary-color font-bold text-[1rem]">08:30 AM</p>
            <p className="text-primary-color font-medium text-[0.875rem]">Tue 20 Jan</p>
          </div>
          <div className={`${Sidebar?.sidebar? "justify-between": "justify-center"} flex items-center`}>
            <div className="flex items-center gap-1 mt-1">
              <Image height={18} width={18} src={globe} className={`${!Sidebar?.sidebar && "mx-auto"}`} alt="" />
              <p className={`text-primary-color font-medium text-[0.625rem] ${!Sidebar?.sidebar && "hidden"}`}>UTC: +5 hours</p>
            </div>
            <Image height={18} width={18} className={`${!Sidebar?.sidebar && "hidden"}`} src={arrow_down} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function NavList() {
  const Sidebar = useSidebarContext();
  return (
    <div className="mt-14 p-2">
      <ul className="navlist">
        <li className={`${!Sidebar?.sidebar && "justify-center"}`}>
          <Image height={18} width={18} src={inbox} alt="Orders" />
          <p className={`${!Sidebar?.sidebar && "hidden"}`}>Orders</p>
        </li>
        <li className={`${!Sidebar?.sidebar && "justify-center"}`}>
          <Image height={18} width={18} src={Frame} alt="Orders" />
          <p className={`${!Sidebar?.sidebar && "hidden"}`}>Subscriptions</p>
        </li>
        <li className={`${!Sidebar?.sidebar && "justify-center"}`}>
          <Image height={18} width={18} src={calendar_days} alt="Calendar" />
          <p className={`${!Sidebar?.sidebar && "hidden"}`}>Calendar</p>
        </li>
        <li className={`${!Sidebar?.sidebar && "justify-center"}`}>
          <Image height={18} width={18} src={hourglass} alt="Waitlist" />
          <p className={`${!Sidebar?.sidebar && "hidden"}`}>Waitlist</p>
        </li>
      </ul>
    </div>
  )
}

function SidebarFooter() {
  const Sidebar = useSidebarContext();
  return (
    <div className="p-2">
      {/* Dashboard */}
      <div className={`flex items-center justify-between p-4`}>
        <div className={`flex items-center gap-2 ${!Sidebar?.sidebar && "hidden"}`}>
          <Image src={layout_dashboard} alt="Dashboard" />
          <p className="font-medium text-primary-color text-[0.75rem]">Dashboard</p>
        </div>
        <Image className={`${!Sidebar?.sidebar && "mx-auto"}`} src={link_icon} alt="" />
      </div>
      <div>
        {/* Admin Profile */}
        <div className={`bg-white rounded-[6px] py-[0.625em] px-[0.5em] flex items-center ${!Sidebar?.sidebar? "justify-center": "justify-between"}`}>
          <div className="flex items-center gap-4">
            <Image height={18} width={18} src={ellipse} alt="profile icon" />
            <div className={`${!Sidebar?.sidebar && "hidden"} flex flex-col`}>
              <p className="text-[#0F172A] font-medium text-[0.75rem]">Admin name</p>
              <p className="text-[#94A3B8] font-normal text-[0.75rem]">adminname@mail.com</p>
            </div>
          </div>
          <Image height={18} width={18} className={`${!Sidebar?.sidebar && "hidden"}`} src={arrow_down} alt="" />
        </div>
        {/* Help Center */}
        <div className="flex items-center gap-2 py-[0.625em] px-[0.5em]">
          <Image height={18} width={18} className={`${!Sidebar?.sidebar && "mx-auto"}`} src={help_circle} alt="Help Center" />
          <div className={`${!Sidebar?.sidebar && "hidden"}`}>
            <p className="text-[0.75rem] text-primary-color font-normal">Help center</p>
            <p className="text-[#64748B] font-normal text-[0.625rem]">©2024 Omnify.Inc.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navbar({ children }: { children: ReactNode }) {
  const Sidebar = useSidebarContext();
  return (
    <div className="flex gap-1">
      <nav className={`bg-[--table-fillin] flex flex-col justify-between relative min-h-[100vh] ${Sidebar?.sidebar? "min-w-[300px]": "min-w-[64px]"}`}>
        <div className="">
          <SidebarHeader />
          <LocationSetter />
          <NavList />
        </div>
        <SidebarFooter />
      </nav>
      {
        children
      }
    </div>
  );
}