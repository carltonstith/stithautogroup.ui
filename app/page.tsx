import CustomerPage from "./customer/page";
import VehiclePage from "./vehicle/page";

export default function Home() {

  return (
    <>
      {/* <CustomerPage />
      <VehiclePage /> */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Stith Auto Group API</h1>
        <CustomerPage />
        <VehiclePage />
      </div>
    </>
  );
}
