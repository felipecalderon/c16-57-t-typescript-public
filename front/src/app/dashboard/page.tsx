'use client'
import Footer from '@/components/Footer'
import Recommended from '@/components/Recommended'
import UpcomingEvents from '@/components/Upcomingevents'
import Cta from '@/components/Cta'
import  Link  from 'next/link'


export default function DashboardPage() {
    return (
        <>
            <Cta/>
            <div className='flex justify-center items-center text-center'>
            <Link className="w-48 font-semibold rounded bg-[#1A7754] my-2 py-4  hover:bg-[#3e9976] shadow-md hover:shadow-gray-400" href="events/create">
               + Crear
            </Link>
            </div>

            <UpcomingEvents />
            <Recommended />
            <Footer />
        </>
    )
}

