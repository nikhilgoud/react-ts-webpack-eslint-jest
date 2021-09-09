import { useEffect, useState } from 'react';
import loader from '../../assets/loader.gif';

interface SearchConfig {
  page: number;
  limit: number;
  term: string;
}
interface Joke {
  id: string;
  joke: string;
}
interface SearchResponse {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: Joke[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}
export default function DadJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [searchConfig, setSearchConfig] = useState<SearchConfig>({ page: 1, limit: 20, term: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const fetchJokes = () => {
    //+ new URLSearchParams(...searchConfig)
    setLoading(true);
    fetch(
      `https://icanhazdadjoke.com/search?page=${searchConfig.page}&limit=${searchConfig.limit}&term=${searchConfig.term}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'User-Agent': 'react-with-typescript-webpack (https://github.com/nikhilgoud)',
        },
      },
    )
      .then((res) => res.json())
      .then((res: SearchResponse) => {
        setLoading(false);
        setJokes(jokes.concat(res.results));
        console.log('request succeeded with JSON response', res);
      })
      .catch(function (error) {
        console.log('request failed', error);
      });
  };
  useEffect(() => {
    fetchJokes();
    // return () => {
    //   cleanup
    // }
  }, [searchConfig]);
  const handleClick = () => {
    setSearchConfig({ ...searchConfig, page: searchConfig.page + 1 });
  };
  return (
    <>
      <ul>
        {jokes.map((joke: Joke) => (
          <li key={joke.id} style={{ padding: '0.5em 0' }}>
            {joke.joke}
          </li>
        ))}
      </ul>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{loading && <img src={loader} style={{ height: 80, width: 80 }} alt="logo" title="logo"></img>}</span>
        <button className="btn" style={{ maxHeight: 50 }} onClick={handleClick}>
          LoadMore...
        </button>
      </div>
    </>
  );
}
