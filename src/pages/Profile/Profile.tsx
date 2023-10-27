import Single from '../../components/Single/Single'
import { profile } from '../../data/data'

const Profile = () => (
    <div className='profile'>
        <Single {...profile} />
    </div>
)

export default Profile