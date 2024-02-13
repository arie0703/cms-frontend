import styles from '@/styles/components/word.module.scss'
import { useState } from 'react';

interface WordProps {
  portuguese: string;
  japanese: string;
}

export const Word = ({ portuguese, japanese }: WordProps) => {

  const [isFlipped, setIsFlipped] = useState<Boolean>(false);

  return (
    <div className={styles.card} onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped && (
        <p>{japanese}</p>
      )}
      {!isFlipped && (
        <p>{portuguese}</p>
      )}
    </div>
  );
};
