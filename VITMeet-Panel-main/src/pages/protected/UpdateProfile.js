import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import UpdateProfile from '../../features/user/UpdateProfile'

import DocumentIcon  from '@heroicons/react/24/solid/DocumentIcon'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Page Title"}))
      }, [])
      
    return(
        <UpdateProfile />
    )
}

export default InternalPage