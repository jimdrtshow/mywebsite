import NavigationPcTab from "./_navigation/NavigationPc";
import NavigationMobile from "./_navigation/NavigationMobileTab";
import menuItems from "@/data/menuItems";

export interface MenuItem {
  label: string; // Texte à afficher dans le menu
  href: string; // URL ou ancre vers laquelle le lien pointe
}

export default function Navigation() {
  return (
    <nav className="overflow-hidden">
      <NavigationPcTab />
      <NavigationMobile />
    </nav>
  );
}
