import Head from 'next/head'
import Header from '../../component/Header'



const about = () => {

    return (
        <>
            <Head>
                <title> About Chakri Ghor </title>
            </Head>
            <Header />
            <div>
                <h1>About Page</h1>
            </div>
        </>
    )
}


export default about




                            // Per Page layout
// about.getLayout = function PageLayout(page) {
//     return (
//         <>
//             {page}
//         </>
//     )
// }



