import P from 'prop-types';
import { useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }: any) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: "38px"}} onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [value, setValue] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);
  const times = useRef<number>(0);

  useEffect(() => {times.current++});

  useEffect(() => {
    input.current?.focus();
    console.log(input.current);
  }, [value]);

  const handleClick = (value: string) => {
    setValue(value);
  };

  console.log('Pai renderizou!');

  // Component did mount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <h1>The element rendered {times.current}</h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;