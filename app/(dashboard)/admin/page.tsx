import CountChart from "@/app/components/CountChart"
import UserCard from "@/app/components/UserCard"
import AttendanceChart from "@/app/components/AttendanceChart"
import FinanceChart from "@/app/components/FinanceChart"
import AnnouncementsCard from "@/app/components/AnnouncementsCard"
import EventsCalendar from "@/app/components/EventsCalendar"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="service" />
                    <UserCard type="sale" />
                    <UserCard type="vehicle" />
                    <UserCard type="part" />
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHARTS */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col">
                <EventsCalendar />
                <AnnouncementsCard />
            </div>
        </div>
    )
}

export default AdminPage