
import NewNoteForm from './NewNoteForm'
import useTitle from '../../hooks/useTitle'

import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'


const NewNote = () => {
    useTitle('techNotes: New Note')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })
    if (!users?.length) return <PulseLoader color={"#FFF"} />

    const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>

    return content
}
export default NewNote