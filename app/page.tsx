import CustomerPage from "./(dashboard)/customer/page";
import VehiclePage from "./(dashboard)/vehicle/page";
import LoginPage from "./login/page";

export default function Home() {

  return (
    <>
      {/* <CustomerPage />
      <VehiclePage /> */}
      <div className="">
        {/* <h1 className="text-2xl font-bold mb-4">Stith Auto Group API</h1> */}
        <LoginPage />
        {/* <CustomerPage />
        <VehiclePage /> */}
      </div>
    </>
  );
}
