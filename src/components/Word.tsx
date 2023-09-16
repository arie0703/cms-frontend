import styles from '@/styles/word.module.css'

interface WordProps {
  portuguese: string;
  japanese: string;
}

export const Word = ({portuguese, japanese}: WordProps) => {
  return (
    <div className={styles.card}>
      <p>{portuguese}</p>
      <p>{japanese}</p>
    </div>
  );
};
