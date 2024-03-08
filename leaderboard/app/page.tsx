"use client";

import Image from "next/image";

import Leaderboard from "@/components/Leaderboard";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelected(e.currentTarget.textContent || "");
  };

  return (
    <main className="max-w-[1700px] m-auto px-4">
      <div className="flex items-center justify-between gap-4 p-6">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl font-medium">Leaderboard</h1>
          {/* <div className="badge badge-ghost flex items-center justify-center text-blue-500 capitalize font-medium"> */}
          <div className="flex items-center justify-center text-blue-500 capitalize font-medium text-nowrap">
            <h2 className="rounded-[15px] bg-gray-200 px-2 py-1">
              top 100 users
            </h2>
          </div>
        </div>
        <div className="flex bg-black justify-self-center w-fit items-center justify-center px-3 py-1 rounded-[6px] text-white">
          {selected}
        </div>
        <div>
          <details className="dropdown dropdown-end">
            <summary className="m-1 btn">Select Offre</summary>
            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li onClick={handleClick}>
                <a>Operational Technology Cyber Security Specialist</a>
              </li>
              <li onClick={handleClick}>
                <a>Const Officer 4</a>
              </li>
              <li onClick={handleClick}>
                <a>Specialist Engineer - Distribution Engineering</a>
              </li>
              <li onClick={handleClick}>
                <a>Administrative Assistant 1</a>
              </li>
              <li onClick={handleClick}>
                <a>Data and Analytics Domain Expert</a>
              </li>
              <li onClick={handleClick}>
                <a>
                  Tour Guide 1 - WAC Bennett Dam Visitor Centre (Hudson's Hope)
                </a>
              </li>
              <li onClick={handleClick}>
                <a>
                  Co-op Student - Electrical Engineering (Transmission P&C
                  Telecom) - Summer 2024{" "}
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="w-full text-center text-lg border overflow-hidden rounded-2xl">
        <div className="bg-[#f9fafc] grid grid-cols-8 px-8 py-4 place-content-center border-b">
          <div className="col-span-4 xl:col-span-1 flex items-center justify-start gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="font-semibold text-md">Name</span>
          </div>
          <div className="col-span-4 xl:col-span-2 font-semibold text-md">
            Rating
          </div>
          <div className="col-span-1 font-semibold text-md hidden xl:block">
            Profile
          </div>
          <div className="col-span-1 font-semibold text-md hidden xl:block">
            Email address
          </div>
          <div className="col-span-2 font-semibold text-md hidden xl:block">
            Skills
          </div>
          <div className="col-span-1 font-semibold text-md hidden xl:block">
            Resume
          </div>
        </div>
        <div className="divide-y-[1px]">
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
          <Leaderboard />
        </div>
      </div>

      <div className="flex justify-between items-center my-8">
        <button className="btn btn-outline px-8 py-2 font-medium">
          Previous
        </button>
        <button className="btn btn-outline px-8 py-2 font-medium">Next</button>
      </div>
    </main>
  );
}
