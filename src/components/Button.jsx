import { cva } from 'class-variance-authority'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { MoveRight } from 'lucide-react'

function Button({children, className, variant, onClick, icon}) {

    const buttonStyles = cva('px-4 py-2 rounded-md flex items-center gap-2 transition duration-300 cursor-pointer', {
        variants: {
            variant: {
                primary: "bg-amber-600 hover:bg-amber-500 text-white rounded-sm flex items-center justify-center",
                secondary: "bg-transparent text-black font-[500] text-[15px] border border-black rounded-none hover:bg-black hover:text-white",
                tertiary: "bg-transparent text-black font-[500] text-[15px] p-0",        
            }
        },
        defaultVariants: {
            variant: 'primary'
        }
    })

  return (
    <button onClick={onClick} className={twMerge(buttonStyles({variant}), className)}>
      {children}
      {icon && <MoveRight size={20} strokeWidth={1.5} />}
    </button>
  )
}

export default Button
