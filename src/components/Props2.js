import PropTypes from 'prop-types'
function Props({p}) {
    return(
        <>
        <h2>Props 2</h2>
        <p>{p}</p>
        </>
    )
}

Props.propTypes = {
    p: PropTypes.string.isRequired
}
Props.defaultProps = {
    p: "Default Prop"
}

export default Props