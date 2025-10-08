import { TAGS } from '@/data/tags';
import { ListFilter } from 'lucide-react';

export default function RightBar(){
    return(
        <aside className="
            relative w-80 shrink-0
            before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0
            before:w-px before:bg-white/10
            px-6
        ">
            {/* view section */}
            <div className="mt-3 md:mt-4">
                <div className='flex justify-between items-center'>
                    <span className="text-lg">
                        View
                    </span>
                    <ListFilter size={20} className='text-neutral-400 mr-3'/>
                </div>
                <div className="flex mt-6 border rounded-lg overflow-hidden border-white/15 divide-x divide-white/15">
                    <button className="flex-1 py-1.5 hover:bg-white/5">
                        List
                    </button>
                    <button className="flex-1 py-1.5 hover:bg-white/5">
                        Grid
                    </button>
                </div>
            </div>
            {/* filters section */}
            <div className='flex-col mt-5 md:mt-6'>
                <span className='text-lg'>
                    Filters
                </span>
                {/* type filter */}
                <div>
                    <span>
                        Type
                    </span>
                    <div>
                        {/* HTTP Request */}
                        <label>
                            <input type='checkbox' />
                            <span>HTTP</span>
                        </label>
                        {/* Ping Request */}
                        <label>
                            <input type='checkbox' />
                            <span>Ping</span>
                        </label>
                        {/* Hook Request */}
                        <label>
                            <input type='checkbox' />
                            <span>Hook</span>
                        </label>
                    </div>
                </div>
                {/* status filter */}
                <div>
                    <span>
                        Status
                    </span>
                    <div>
                        <label>
                            <input type='checkbox' />
                            <span>Up</span>
                        </label>
                        <label>
                            <input type='checkbox' />
                            <span>Down</span>
                        </label>
                    </div>
                </div>
                {/* tags filter */}
                <div>
                    {TAGS.map((tag) => (
                        <label key={tag.id}>
                            <input type='checkbox' />
                            <span>{tag.name}</span>
                        </label>
                    ))}
                </div>
            </div>
            {/* apply button */}
            <div>
                <button>
                    Apply
                </button>
            </div>
        </aside>
    )
}