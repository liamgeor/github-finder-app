import PropTypes from 'prop-types'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home(props) {
    return (
        <div className='text-white'>
            <UserSearch/>
            <UserResults/>
        </div>
    )
}

Home.propTypes = {

}

export default Home

