"use client";
import { useEffect, useState } from "react";
import customerData from "../../data/customers.json"; // Importing the JSON file for type checking

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = "https://localhost:7207/api/Customer";
const CustomerDataSample = customerData.CustomerDataTable // Using the imported JSON data

interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export default function CustomerPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch(`${API_URL}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = (await response.json()) as Customer[];
                // console.log("Fetched customers:", data);
                setCustomers(data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        //fetchCustomers();
    }, []);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CustomerDataSample.map((customer, index) => (
                            <tr key={customer.customerId}>
                                <td>{`${customer.firstName} ${customer.lastName}`}</td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>{customer.city}</td>
                                <td>{customer.state}</td>
                                <td>{customer.zipCode}</td>
                                <td>{customer.country}</td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tbody>
                        {customers.map((customer, index) => (
                            <tr key={customer.customerId}>
                                <td>{`${customer.firstName} ${customer.lastName}`}</td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>{customer.city}</td>
                                <td>{customer.state}</td>
                                <td>{customer.zipCode}</td>
                                <td>{customer.country}</td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    )
}