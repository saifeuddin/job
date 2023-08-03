import Header from '../component/Header'


function Error({ statusCode }) {
    return ( 
        <>
            <Header />
            <p> { statusCode ?
                `An error ${statusCode} occurred on server` 
                :
                'An error occurred on client'
            } 
            </p>
        </>
    )
}



Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    
    return {
        statusCode
    }
}

export default Error