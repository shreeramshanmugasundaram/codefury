import React from "react";
import ChatCards from "../Components/ChatCards";
import Search from "../Components/Search";
import DrCards from "../Components/DrCards";

const doctors = [
  { name: "Vedika Patil", Des: "Bsc Psychologist", link: "/vedika_patil" },
  { name: "John Smith", Des: "MD Psychiatrist", link: "/john_smith" },
  {
    name: "Sarah Jones",
    Des: "Ph.D. Clinical Psychologist",
    link: "/sarah_jones",
  },
  { name: "David Lee", Des: "MSc Child Psychologist", link: "/david_lee" },
  { name: "Emily Brown", Des: "Ph.D. Neuropsychologist", link: "/emily_brown" },
  {
    name: "Michael Wang",
    Des: "MD Behavioral Therapist",
    link: "/michael_wang",
  },
  {
    name: "Laura Davis",
    Des: "Ph.D. Counseling Psychologist",
    link: "/laura_davis",
  },
  {
    name: "Kevin Johnson",
    Des: "MSc Clinical Social Worker",
    link: "/kevin_johnson",
  },
  {
    name: "Jennifer White",
    Des: "Ph.D. Forensic Psychologist",
    link: "/jennifer_white",
  },
  // Add more doctors here...
];

const DoctorRooms = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto m-10">
        <Search />
        <div className="p-4">
          <button
            type="button"
            class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Text Rooms
          </button>
          <button
            type="button"
            class="px-3 mx-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Audio Rooms
          </button>
        </div>
        <div className="grid grid-cols-3">
          {doctors.map((data) => {
            return <DrCards data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorRooms;
