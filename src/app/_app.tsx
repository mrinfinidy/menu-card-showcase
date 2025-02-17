import { Provider } from "@/components/ui/provider";

type AppProps = {
  Component: any;
  pageProps: any;
  router: any;
};

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} key={router.route} />
    </Provider>
  )
}
