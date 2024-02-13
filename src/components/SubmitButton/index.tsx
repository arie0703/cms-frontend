import styles from '@/styles/components/submit-button.module.scss';

interface SubmitButtonProps {
  buttonText: string;
  handleClick: () => Promise<void>;
}

export const SubmitButton = ({ buttonText, handleClick }: SubmitButtonProps) => {

  return (
    <button className={styles['submitButton']} onClick={() => handleClick()}>
      {buttonText}
    </button>
  )
}
