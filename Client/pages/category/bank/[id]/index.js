import Head from 'next/head'
const axios = require('axios')
import {useRouter} from 'next/router'

//
    import Header from '../../../../component/Header'
    import Single_Bank_Job from '../../../../component/bank/Single_Bank_Job'
//




//------------------------------------------
    export async function getStaticPaths() {
        const res = await fetch('http://localhost:4000/category/bank')
        const data = await res.json()

        const paths = data.map((post) => {
            return {
                params: {
                    id: `${post._id}`,
                }
            }
        })

        return {
            paths,
            fallback: true
        }
    }


    export async function getStaticProps({ params }) {
        const res = await axios(`http://localhost:4000/category/bank/${params.id}`)
        const data = res?.data

        return {
            props: {
                post: data || {},
            }
        }
    }
//--------------------------------







//
    const singleBank = ({ post }) => {

        const router = useRouter()
        const {asPath} = router

        return(
            <>
                <Head>
                    <title> 
                        Chakrighor All Bank Jobs 2022
                    </title>
                </Head> 
                <Header />
                

                <Single_Bank_Job post={post} path={asPath}/>
            </>
        )
    }





export default singleBank