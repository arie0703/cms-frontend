
import { FormProvider, useForm } from 'react-hook-form';
import { SubmitButton } from '../SubmitButton';
import styles from '@/styles/components/form.module.scss';

export const Form = () => {

  const methods = useForm({
    mode: "onChange",
    criteriaMode: "all"
  });

  const submitData = async () => {

    const formData = {
      japanese: methods.watch("japanese"),
      portuguese: methods.watch("portuguese"),
      userId: "test"
    }

    const response = await fetch('/api/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData }),
    });

    console.log(response);

    if (response.status === 201) {
      methods.reset();
      console.log(201);
    }
  };

  return (
    <div className={styles['form']}>
      <FormProvider {...methods}>
        <form>
          <h2>単語を追加</h2>
          <dl className={`${styles['_input']} ${styles['dl01']}`}>
            <dt className={styles['_title']}>日本語</dt>
            <dd>
              <input
                id="japanese"
                type="text"
                {...methods.register("japanese")}
              />
            </dd>
          </dl>
          <dl className={`${styles['_input']} ${styles['dl01']}`}>
            <dt className={styles['_title']}>ポルトガル語</dt>
            <dd>
              <input
                id="portuguese"
                type="text"
                {...methods.register("portuguese")}
              />
            </dd>
          </dl>
          <SubmitButton handleClick={() => submitData()} buttonText="Submit" />
        </form>
      </FormProvider>
    </div>
  )
}
