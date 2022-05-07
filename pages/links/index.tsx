import Layout from '../../components/layout';

export default function Post({ postData }: {
  postData: {
    id: string;
    date: string;
    title: string
  }
}) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
