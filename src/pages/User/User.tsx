import { useParams } from 'react-router-dom'
import { Single } from '../../components'
import { usersInformation } from '../../data/data'

const User = () => {
  const { id }: any = useParams()
  return (
    <div className='user'>
      <Single {...usersInformation[id - 1]} />
    </div>
  )
}

export default User