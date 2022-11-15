import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { ImBlocked } from 'react-icons/im'

function Alert() {
    const {alert} = useContext(AlertContext)
  return (
    alert !== null && (
        <div className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
               <ImBlocked className='mt-2'/>
            )}
            <p className="flex-1 text-base font-semibold leading-7 text-ghost">
                <strong>{alert.msg}</strong>
            </p>
        </div>
    )
  )
}

export default Alert