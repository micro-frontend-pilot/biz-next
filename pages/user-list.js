import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../components/layout';

export default function UserList () {
    return (
        <Layout>
            <Head>
                <title>User List</title>
            </Head>

            <h1>User List Page</h1>
        </Layout> 
    )
}

// export async function getServerSideProps({ req, res }) {
//     console.log("getServerSideProps called");
//     res.setHeader(
//         'Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59'
//     );
//     return { props: { title: "ispark" } }
// }
