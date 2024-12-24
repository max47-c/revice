"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

// Default Cameroon coordinates
const CAMEROON_COORDINATES: LatLngExpression = [7.3697, 12.3547];

// Custom icon for blood banks
const bloodBankIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [25, 25],
  iconAnchor: [12, 24],
});

const FindBloodPage: React.FC = () => {
  const [bloodBanks, setBloodBanks] = useState<
    { id: number; name: string; latitude: number; longitude: number; address: string; town: string; region: string }[]
  >([]);

  useEffect(() => {
    // Fetch blood bank data
    async function fetchBloodBanks() {
      try {
        const response = await fetch("/api/bloodbank");
        const data = await response.json();
        setBloodBanks(data);
      } catch (error) {
        console.error("Error fetching blood banks:", error);
      }
    }

    fetchBloodBanks();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-4 text-red-600">
          Find Blood Banks Near You
        </h1>

        <MapContainer center={CAMEROON_COORDINATES} zoom={7} className="h-96" zoomControl>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; OpenStreetMap contributors"
          />
          {bloodBanks.map((bank) => (
            <Marker
              key={bank.id}
              position={[bank.latitude, bank.longitude] as LatLngExpression}
              icon={bloodBankIcon}
            >
              <Popup>
                <strong>{bank.name}</strong>
                <br />
                Address: {bank.address}
                <br />
                {bank.town}, {bank.region}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default FindBloodPage;
