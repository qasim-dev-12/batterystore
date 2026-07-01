import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 51,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 511,
        title: "Car Battery Replacement",
        path: "/services/car-battery-replacement",
        newTab: false,
      },
      {
        id: 512,
        title: "Battery Diagnostics & Jumpstart",
        path: "/services/battery-diagnostics-jumpstart",
        newTab: false,
      },
      {
        id: 513,
        title: "New Battery Dubai",
        path: "/services/new-battery-dubai",
        newTab: false,
      },
      {
        id: 5131,
        title: "Change Battery Dubai",
        path: "/services/change-battery-dubai",
        newTab: false,
      },
      {
        id: 514,
        title: "Tyre Replacement",
        path: "/services/tyre-replacement",
        newTab: false,
      },
      {
        id: 515,
        title: "Tyre Repair",
        path: "/services/tyre-repair",
        newTab: false,
      },
      {
        id: 516,
        title: "Flat Tyre Replacement",
        path: "/services/flat-tyre-replacement",
        newTab: false,
      },
      {
        id: 517,
        title: "Flat Tyre Repair",
        path: "/services/flat-tyre-repair",
        newTab: false,
      },
      {
        id: 518,
        title: "Roadside Assistance",
        path: "/services/roadside-assistance",
        newTab: false,
      },
      {
        id: 519,
        title: "Car Towing & Recovery",
        path: "/services/car-towing-recovery",
        newTab: false,
      },
      {
        id: 5111,
        title: "Car Recovery Dubai",
        path: "/services/car-recovery-dubai",
        newTab: false,
      },
    ],
  },
  {
    id: 52,
    title: "Battery Brands",
    newTab: false,
    submenu: [
      {
        id: 521,
        title: "Amaron Battery",
        path: "/battery-brands/amaron",
        newTab: false,
      },
      {
        id: 522,
        title: "Bosch Battery",
        path: "/battery-brands/bosch",
        newTab: false,
      },
      {
        id: 523,
        title: "Varta Battery",
        path: "/battery-brands/varta",
        newTab: false,
      },
      {
        id: 524,
        title: "Dynex Battery",
        path: "/battery-brands/dynex",
        newTab: false,
      },
      {
        id: 525,
        title: "Max Gold Battery",
        path: "/battery-brands/max-gold",
        newTab: false,
      },
      {
        id: 526,
        title: "Max Part Battery",
        path: "/battery-brands/max-part",
        newTab: false,
      },
      {
        id: 527,
        title: "View All Battery Brands",
        path: "/battery-brands",
        newTab: false,
      },
    ],
  },
  {
    id: 53,
    title: "Areas",
    path: "/areas",
    newTab: false,
  },
  {
    id: 54,
    title: "Warranty",
    path: "/warranty",
    newTab: false,
  },
];
export default menuData;
