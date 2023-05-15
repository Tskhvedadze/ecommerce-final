import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type SearchFieldProps = {}

export const SearchField = (props: SearchFieldProps) => {
    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
                <input
                    placeholder='Search products...'
                    type='text'
                    className='flex grow items-center h-[100%] rounded-l text-gray-dark focus:outline-yellow p-2 text-lg'
                />
                <button className='w-[45px]'>
                    <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
                </button>
            </div>
        </div>
    )
}
