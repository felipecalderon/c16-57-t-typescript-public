import React from 'react'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import Create from '@/app/events/create/page'

const ModalCrear = () => {

  return (
    <Dialog>
        <DialogTrigger asChild>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Open
            </button>
        </DialogTrigger>
        
            
            <Create />
        
    </Dialog>
    
  )
}

export default ModalCrear