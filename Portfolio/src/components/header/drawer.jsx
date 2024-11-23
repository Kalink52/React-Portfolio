import { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function NavDrawer(prop) {
  const { navList } = prop;
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="flex justify-between">
        <img src="/assets/svgs/about/gamepad.svg" alt="logo no gogo" />
        <Button onClick={openDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </div>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex flex-col w-full items-center justify-between">
          <img src="/assets/svgs/about/gamepad.svg" alt="logo no gogo" />
          {navList.map((nav) => {
            return (
              <NavLink
                to={nav.navUrl}
                key={nav.id}
                className="flex justify-center w-full border border-slate-200 rounded-md py-2 my-2 "
              >
                {nav.title}
              </NavLink>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}
