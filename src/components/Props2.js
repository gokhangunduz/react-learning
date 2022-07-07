import PropTypes from 'prop-types'
function Props({p}) {
    return(
        <>
        <h1>Props 2</h1>
        <p>{p}</p>
        </>
    )
}

Props.propTypes = {
    p: PropTypes.string.isRequired
}

export default Props