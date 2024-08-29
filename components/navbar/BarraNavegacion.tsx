"use client";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/navbar";

import { ThemeSwitcher } from "../themeSwitch/ThemeSwitcher";
import { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";

export const BarraNavegacion = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Función que se ejecuta cuando cambia el hash en la URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveSection(hash);
    };

    // Agregar el event listener para detectar cambios en el hash
    window.addEventListener("hashchange", handleHashChange);

    // Ejecutar la función al montar el componente para manejar la URL inicial
    handleHashChange();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const menuItems = [
    {
      text: "Inicio",
      href: "#inicio",
    },
    {
      text: "Servicios",
      href: "#servicios",
    },
    {
      text: "Productos",
      href: "#productos",
    },
    {
      text: "Galería",
      href: "#galeria",
    },
    {
      text: "Ubicación",
      href: "#ubicacion",
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        wrapper: ["bg-primary-900", "md:px-28"],
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-4",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-full",
          "data-[active=true]:after:bg-secondary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="md:hidden" justify="end">
          <ThemeSwitcher />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(({ text, href }, index) => (
          <NavbarItem key={`${text}-${index}`} isActive={activeSection === href}>
            <Link href={href}>{text}</Link>
          </NavbarItem>
        ))}
        <NavbarItem className="hidden md:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map(({ text, href }, index) => (
          <NavbarMenuItem key={`${text}-${index}`}>
            <Link className="w-full" href={href} size="lg">
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
