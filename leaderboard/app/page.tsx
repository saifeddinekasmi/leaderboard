import Image from "next/image";

import Leaderboard from "@/components/Leaderboard";




export default function Home() {
  
  return (
    <main className="max-w-[1700px] m-auto px-4">
     <div className="flex items-center gap-4 p-6">
  <h1 className="text-xl font-medium">Leaderboard</h1>
  <div className="badge badge-ghost text-blue-500 capitalize font-medium">top 100 users</div>
  <div className="ml-auto">
    <details className="dropdown dropdown-end">
      <summary className="m-1 btn">Select Offre</summary>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Operational Technology Cyber Security Specialist</a></li>
        <li><a>Const Officer 4</a></li>
        <li><a>Specialist Engineer - Distribution Engineering</a></li>
        <li><a>Administrative Assistant 1</a></li>
        <li><a>Data and Analytics Domain Expert</a></li>
        <li><a>Tour Guide 1 - WAC Bennett Dam Visitor Centre (Hudson's Hope)</a></li>
        <li><a>Co-op Student - Electrical Engineering (Transmission P&C Telecom) - Summer 2024 </a></li>
      </ul>
    </details>
  </div>
</div>
      <div className='w-full text-center text-lg border overflow-hidden rounded-2xl'>
        <div className='bg-[#f9fafc] grid grid-cols-8 px-8 py-4 place-content-center border-b'>
          <div className='col-span-4 xl:col-span-1 flex items-center justify-start gap-2'>
            <input type="checkbox" className="checkbox" />
            <span className='font-semibold text-md'>Name</span>
          </div>
          <div className='col-span-4 xl:col-span-2 font-semibold text-md'>Rating</div>
          <div className='col-span-1 font-semibold text-md hidden xl:block'>Profile</div>
          <div className='col-span-1 font-semibold text-md hidden xl:block'>Email address</div>
          <div className='col-span-2 font-semibold text-md hidden xl:block'>Skills</div>
          <div className='col-span-1 font-semibold text-md hidden xl:block'>Resume</div>
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
      <button className="btn btn-outline px-8 py-2 font-medium">Previous</button>
      <button className="btn btn-outline px-8 py-2 font-medium">Next</button>
      </div>
    </main>
  );
}


