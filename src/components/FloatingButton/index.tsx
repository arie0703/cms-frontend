import styles from '@/styles/components/floating-button.module.scss';
import AddIcon from '@mui/icons-material/Add';

export const FloatingButton = () => {

  return (
    <div className={styles['floating-button']}>
      <button className={styles['_button']}>
        <AddIcon />
      </button>
    </div>
  )
}
