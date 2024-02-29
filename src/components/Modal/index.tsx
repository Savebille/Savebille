import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React from "react"

interface ModalProps {
    children: React.ReactNode
}

const Modal = ({ children } : ModalProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>Agregar</AlertDialogTrigger>
            <AlertDialogContent>
                { children }
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Modal
