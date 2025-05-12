"use client";
import { useEffect, useState } from "react";
import vehicleData from "../../data/vehicles.json"; // Importing the JSON file for type checking
import Link from "next/link";

const API_URL = "https://localhost:7207/api/Vehicle";
const VehicleDataSample = vehicleData.VehicleDataTable // Using the imported JSON data

interface Vehicle {
    vehicleId: number;
    make: string;
    model: string;
    year: number;
    color: string;
    available: boolean;
}

export default function VehiclePage() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch(`${API_URL}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = (await response.json()) as Vehicle[];
                // console.log("Fetched vehicles:", data);
                setVehicles(data);
            } catch (error) {
                console.error("Error fetching vehicles:", error);
            }
        };

        //fetchVehicles();
    }, []);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vehicles</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Available</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {VehicleDataSample.map((vehicle, index) => (
                            <tr key={vehicle.vehicleId}>
                                <td>{vehicle.make}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.color}</td>
                                <td>{vehicle.available ? "Yes" : "No"}</td>
                                <td>
                                    <Link href="vehicle-details" className="btn">Details</Link>
                                </td>
                                <td>
                                    <Link href="vehicle-edit" className="btn">Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tbody>
                        {vehicles.map((vehicle, index) => (
                            <tr key={vehicle.vehicleId}>
                                <td>{vehicle.make}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.color}</td>
                                <td>{vehicle.available ? "Yes" : "No"}</td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    );
}