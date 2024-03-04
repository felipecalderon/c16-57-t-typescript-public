'use client'
import useEventsList from '@/hooks/get-events'
import React from 'react'

const EventFilterPage = () => {
  const { events } = useEventsList()

  if(events.length > 0){
    return events.map(({title}) => <p key={title}>{title}</p>)
  }

}

export default EventFilterPage