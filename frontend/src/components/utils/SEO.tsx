import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export default function SEO(props: Props) {
  return (
    <Head>
      <title>{`Deployable | ${props.title}`}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
