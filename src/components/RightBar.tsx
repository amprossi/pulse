import { TAGS } from '@/data/tags';
import { Checkbox } from './Checkbox';
import { ListFilter } from 'lucide-react';

export default function RightBar(){
    return(
        <aside className="
            flex flex-col h-screen
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
                <div className='mt-4 md:mt-5'>
                    <span className='text-neutral-400'>
                        Type
                    </span>
                    <div className='flex flex-col gap-1.5 mt-1'>
                        {/* HTTP Request */}
                        <Checkbox label='HTTP'/>
                        {/* Ping Request */}
                        <Checkbox label='Ping'/>
                        {/* Hook Request */}
                        <Checkbox label='Hook'/>
                    </div>
                </div>
                {/* status filter */}
                <div className='mt-4 md:mt-5'>
                    <span className='text-neutral-400'>
                        Status
                    </span>
                    <div className='flex flex-col gap-1.5 mt-1'>
                        <Checkbox label='Up'/>
                        <Checkbox label='Down'/>
                    </div>
                </div>
                {/* tags filter */}
                <div className='mt-4 md:mt-5'>
                    <span className='text-neutral-400'>
                        Tags
                    </span>
                    <div className='flex flex-col gap-1.5 mt-1'>
                        {TAGS.map((tag) => (
                            <Checkbox key={tag.id} label={tag.name}/>
                        ))}
                    </div>
                </div>
            </div>
            {/* apply button */}
            <div className='mt-auto mb-5'>
                <button className='
                w-full py-2 border border-white/10 bg-white/5 
                rounded-lg text-neutral-300 
                hover:bg-white/10 transition-colors
                '>
                    Apply
                </button>
            </div>
        </aside>
    )
}