import styles from '@/styles/components/navigation-bar.module.scss';
import AbcIcon from '@mui/icons-material/Abc';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import { Dispatch, SetStateAction } from 'react';

interface NavigationBarProps {
  selectedContent: number;
  setSelectedContent: Dispatch<SetStateAction<number>>;
}

export const NavigationBar = ({ selectedContent, setSelectedContent }: NavigationBarProps) => {

  return (
    <div className={styles['navigation-bar']}>
      <div className={styles['_flex']}>
        <div className={
          selectedContent === 0
            ? `${styles['_content']} ${styles['_selected']}`
            : styles['_content']
        } onClick={() => setSelectedContent(0)}>
          <AbcIcon />
          <p>単語一覧</p>
        </div>

        <div className={
          selectedContent === 1
            ? `${styles['_content']} ${styles['_selected']}`
            : styles['_content']
        } onClick={() => setSelectedContent(1)}>
          <BookIcon />
          <p>単語帳</p>
        </div>

        <div className={
          selectedContent === 2
            ? `${styles['_content']} ${styles['_selected']}`
            : styles['_content']
        } onClick={() => setSelectedContent(2)}>
          <QuizIcon />
          <p>クイズ</p>
        </div>
      </div>
    </div>
  )
}
