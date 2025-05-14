import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* {Searchbar} */}
            <div className="hidden md:flex">
                {/* <Image src="search.png" alt=""/> */}
                <CiSearch className="text-gray-400" size={14} />
                <input type="text" placeholder="Search..." />
            </div>
            {/* ICONS AND USER */}
            <div className="flex items-center gap-6">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <FaRegMessage className="text-gray-400" size={20} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <TfiAnnouncement className="text-gray-400" size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">John Doe</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <RxAvatar className="text-gray-400" size={20} />
            </div>
        </div>
    )
}

export default Navbar