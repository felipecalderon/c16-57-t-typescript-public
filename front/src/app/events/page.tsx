'use client'
import CardEvent from '@/components/CardEvent'
import DetalleDialog from '@/components/details/details-dialog'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import useEventsList from '@/hooks/get-events'
import React, { useState } from 'react'

const EventFilterPage = () => {
  const { events, setQuery, query, limit, setLimit } = useEventsList()
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);
  return (
    <div className='px-10 mt-6'>
      <div className='flex max-w-80 mb-6 gap-3'>
        <Input placeholder="Buscar eventos" type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
        <select onChange={(e) => setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'>
        {events?.map((event) => (
          <Dialog onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <CardEvent onClick={toggleDialog} key={event.title} event={event}></CardEvent>
            </DialogTrigger>
            <DetalleDialog event={event} onClick={toggleDialog}/>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default EventFilterPage