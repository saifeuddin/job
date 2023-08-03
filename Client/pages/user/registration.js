
import Head from 'next/head'
import Header from '../../component/Header'
import Singup from '../../component/User/Singup'


//
const sty = {
    backgroundColor: 'rgb(207, 197, 197)',
    borderRadius: '7px 7px 0px 0px',
    padding: '13px'
}


//
const registration = () => {


    return (
        <>
            <Head>
                <title> ChakriGhor Sign Up </title>
            </Head>

            <Header />



            <div style={sty}>
                <Singup  /> 
            </div>
        </>
    )
}



export default registration