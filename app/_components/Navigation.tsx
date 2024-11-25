import NavigationPcTab from "./_navigation/NavigationPc";
import NavigationMobile from "./_navigation/NavigationMobileTab";
import menuItems from "@/data/menuItems";

export default function Navigation() {
  return (
    <nav className="overflow-hidden">
      <NavigationPcTab />
      <NavigationMobile />
    </nav>
  );
}
