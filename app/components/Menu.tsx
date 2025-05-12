import Link from "next/link"
import Image from "next/image";
import { FaHome, FaFileInvoiceDollar, FaCar } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { IoPeople } from "react-icons/io5";

const menuItem = [
    {
        title: "MENU",
        items: [
            {
                icon: FaHome,
                label: "Home",
                href: "/",
            },
            {
                icon: MdPerson,
                label: "Salespersons",
                href: "/salespersons",
            },
            {
                icon: IoPeople,
                label: "Customers",
                href: "/customers",
            },
            {
                icon: FaFileInvoiceDollar,
                label: "Invoices",
                href: "/invoices",
            },
            {
                icon: FaCar,
                label: "Vehicles",
                href: "/vehicles",
            }
        ]
    }
]

const Menu = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItem.map((menu, index) => (
                <div className="flex flex-col gap-2" key={index}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                        {menu.title}
                    </span>
                    {menu.items.map((item, index) => (
                        <Link
                            href={item.href}
                            key={item.label}
                            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
                        >
                            <item.icon width={20} height={20} />
                            <span className="hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu