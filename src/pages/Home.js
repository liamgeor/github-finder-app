import PropTypes from 'prop-types'
import UserResults from '../components/users/UserResults'

function Home(props) {
    return (
        <div className='text-white'>
            <h1 className="text-6xl">Welcome</h1>
            <UserResults/>
        </div>
    )
}

Home.propTypes = {

}

export default Home

