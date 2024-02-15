import fetcher from '@/src/libs/fetcher';
import { Word } from '@prisma/client';
import { useEffect, useState } from 'react';
import { WordCard } from '../WordCard';

export const WordList = () => {

  const [words, setWords] = useState<Word[]>([]);

  const getAllWords = async () => {
    fetcher<Word[]>('/api/words', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => setWords(data))
      .catch(err => console.error({ err }))
  }

  useEffect(() => { getAllWords() }, [])

  return (
    <div>
      {words.map((word) => { return <WordCard japanese={word.japanese} portuguese={word.portuguese} key={word.id}></WordCard> })}
    </div>
  );
};
