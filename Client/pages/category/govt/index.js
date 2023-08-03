import Head  from 'next/head'
const axios = require('axios')
import {useRouter} from 'next/router'



//
    import Header from '../../../component/Header'
    import Govt_Jobs_List from '../../../component/govt/Govt_Jobs_List'
//





//
    export async function getStaticProps () {
        const res = await axios(`http://localhost:4000/category/govt`)
        const data = res?.data 

        return {
            props: {
                post: data || {},
            }
        }
    }
//





const bank = ({ post }) => {

    const router = useRouter()
    const {asPath} = router


    return(
        <>
            <Head>
                <title> 
                    Chakrighor All Govt Jobs 2022
                </title>
            </Head> 
            <Header />

            <Govt_Jobs_List post={post} path={asPath}/>
        </>
    )
}



export default bank