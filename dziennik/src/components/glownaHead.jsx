import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

function GlownaHead(){


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (  
    
    <div className="w-full bg-gray-800 h-10" id="nav">
      
      <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full bg-gray-800 text-white">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden w-full text-white sm:flex gap-4 " justify="center">
          
          <NavbarItem isActive>
            <Link href="/" aria-current="page" >
              Strona główna
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#" className="text-gray-500">
              Dziennik zmian
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="#" aria-current="page" >
              Dla dyrekcji
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#"className="text-gray-500">
              Dla ucznia
            </Link>
          </NavbarItem>
          
          <NavbarItem>
            <Link href="/dodajSzkole" >
              Zapisz swoją szkołę
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}export default GlownaHead