import styles from '@/styles/components/word.module.scss'
import { useState } from 'react';

interface WordCardProps {
  portuguese: string;
  japanese: string;
}

export const WordCard = ({ portuguese, japanese }: WordCardProps) => {

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
