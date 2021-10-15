import axios from 'axios';
import Link from 'next/link'

const Papers = ({ papers, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {papers.map(paper => (
        <div key={paper.id}>
            <li>{paper.name}</li>
            <Link href="/">Open PDF</Link>
        </div>
      ))}
    </ul>
  );
};

Papers.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/Categories');
    const papers = res.data;
    console.log(res)
    return { papers };
  } catch (error) {
      console.log(error)
    return { error };
  }
};

export default Papers;
