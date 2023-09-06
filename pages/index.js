import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import dynamic from 'next/dynamic';

const Copyright = dynamic(()=> import("common/Copyright"), { ssr: false });

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>This is Nextjs Home</p>
      </section>
      <p>below copyright is binded dynamically from another microfrontend</p>
      <Copyright from="about" />
    </Layout>
  );
}
