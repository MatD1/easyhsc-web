import axios from 'axios';
import Link from 'next/link'

const baseUrl = 'http://localhost:1337'

const English = ({ papers, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {papers.map(paper => (
        <div key={paper.papers.id}>
            <li>{paper.papers.name}</li>
            <Link href={`http://localhost:1337${paper.papers.gsc_file_link}`}>Open PDF</Link>
        </div>
      ))}
    </ul>
  );
};

English.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/Categories/2');
    const papers = res.data;
    console.log(papers)
    return { papers };
  } catch (error) {
      console.log(error)
    return { error };
  }
};

export default English;
