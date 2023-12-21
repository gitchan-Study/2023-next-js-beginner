import Layout from "@/components/Layout";

export default function App({Component, pageProps}) {
    return <Layout>
        <Component {...pageProps}/>
        <style jsx global>{`
          a {
            color: white;
          }

          h1 {
            background-color: tomato;
          }
        `}</style>
    </Layout>
};
