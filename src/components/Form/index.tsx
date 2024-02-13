
import { FormProvider, useForm } from 'react-hook-form';

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
    <div>
      <FormProvider {...methods}>
        <form>
          <h2>単語を追加</h2>
          <dl>
            <dt>日本語</dt>
            <dd>
              <input
                id="japanese"
                type="text"
                {...methods.register("japanese")}
              />
            </dd>
          </dl>
          <dl>
            <dt>ポルトガル語</dt>
            <dd>
              <input
                id="portuguese"
                type="text"
                {...methods.register("portuguese")}
              />
            </dd>
          </dl>
          <button className="submit" onClick={() => submitData()} type="button">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
