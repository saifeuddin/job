import Head from 'next/head'
import Header from '../../component/Header'
import Login from '../../component/User/Login'


const sty = {
    backgroundColor: 'rgb(207, 197, 197)',
    borderRadius: '7px 7px 0px 0px',
    padding: '13px'
}


//
const about = () => {

    return (
        <>
            <Head>
                <title> ChakriGhor Log In </title>
            </Head>
            <Header />



            <div style={sty}>
                <Login />
            </div>
        </>
    )
}



export default about