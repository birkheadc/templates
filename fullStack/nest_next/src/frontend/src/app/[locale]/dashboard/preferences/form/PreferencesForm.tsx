import * as React from 'react';
import Form from '../../../../../components/forms/form/Form';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';
import useResult from '../../../../../hooks/result/useResult';
import { useForm } from 'react-hook-form';
import { UpdatePreferencesRequest } from '../../../../../types/requests/updatePreferences/updatePreferencesRequest';
import { UserContext } from '../../../../../contexts/user/UserContext';
import LanguageSelect from '../../../../../components/forms/inputs/languageSelect/LanguageSelect';
import { UserPreferences } from '../../../../../types/user/userPreferences';

type PreferencesFormProps = {

}

export default function PreferencesForm(props: PreferencesFormProps): JSX.Element {

  const t = useRichTranslations();
  const { result, awaitResult } = useResult();

  const { user, updatePreferences } = React.useContext(UserContext);

  const { register, handleSubmit, watch, formState } = useForm<UserPreferences>({
    defaultValues: user?.preferences
  });

  const onSubmit = async (preferences: UserPreferences) => {
    awaitResult(async () => {
      return await updatePreferences({ preferences });
    })
  }
  
  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <LanguageSelect register={register} name={'language'} />
    </Form>
  );
}