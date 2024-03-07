import { Download, Eye } from 'lucide-react'
import React from 'react'

export default function Leaderboard() {
    return (
        <div className='bg-white grid grid-cols-8 px-8 py-4'>
            <div className='col-span-4 xl:col-span-1 flex items-center gap-2'>
                <input type="checkbox" className="checkbox" />
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="ml-3 text-left">
                        <div className="font-semibold">John Doe</div>
                        <div className="text-xs text-gray-600">
                            @johndoe
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-4 xl:col-span-2 grid place-content-center'>
                <div className="rating rating-md space-x-1">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div className='col-span-1 place-content-center hidden xl:grid'>
                Phyton Developer
            </div>
            <div className='col-span-1 hidden xl:grid place-content-center'>
                olivia@gmail.com
            </div>
            <div className='col-span-2 hidden xl:grid place-content-center'>
                <div className='flex gap-2 justify-center flex-wrap'>
                    <div className="badge badge-ghost">ghost</div>
                    <div className="badge badge-ghost">ghost</div>
                    <div className="badge badge-ghost">ghost</div>
                    <div className="badge">+4</div>
                </div>
            </div>
            <div className='col-span-1 hidden xl:grid place-content-center'>
                <div className='flex gap-4 justify-center items-center'>
                    <button>
                        <Download />
                    </button>
                    <button>
                        <Eye />
                    </button>
                </div>
            </div>
        </div>

    )
}
