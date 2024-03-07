import Image from "next/image";

import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  return (
    <main className="max-w-[1700px] m-auto px-4">
      <div className="flex items-center gap-4 p-6">
        <h1 className="text-xl font-medium">Leaderboard</h1>
        <div className="badge badge-ghost text-blue-500 capitalize font-medium">top 100 users</div>
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
        <button className="border px-8 py-2 font-medium rounded-lg">
          Previous
        </button>
        <div>
          pageneation
        </div>
        <button className="border px-8 py-2 font-medium rounded-lg">
          Next
        </button>
      </div>
    </main>
  );
}
