interface CheckboxProps{
    label: string;
}

export function Checkbox({label}: CheckboxProps){
    return(
        <label className='inline-flex items-center gap-2 select-none'>
            <input type='checkbox' className="
            relative appearance-none w-4.5 h-4.5 
            border border-white/20 bg-transparent rounded-sm transition-colors
            after:content-[''] after:absolute after:left-[5px] after:top-[1px]
            after:w-[6px] after:h-[10px] after:border-r-2 after:border-b-2
            after:border-transparent after:rotate-45 after:scale-0 after:transition-transform
            checked:bg-white/10 checked:border-white/30
            checked:after:scale-100 checked:after:border-white
            hover:border-white/60
            "/>
            <span className='leading-none text-neutral-400 hover:text-neutral-100'>
                {label}
            </span>
        </label>
    );
}