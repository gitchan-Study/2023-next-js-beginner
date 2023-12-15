import NavBar from "@/components/NavBar";

export default function App({Component, pageProps}) {
    return <>
        <NavBar/>
        <Component {...pageProps}/>
        <style jsx global>{`
          a {
            color: white;
          }

          h1 {
            background-color: tomato;
          }
        `}</style>
    </>
};
