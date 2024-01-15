import * as React from 'react';
import './PersonForm.css'
import { Person, PersonData } from '../../../../types/test/person/person';
import StandardFormLabeledInput from '../../../forms/standardFormLabeledInput/StandardFormLabeledInput';

interface IPersonFormProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function PersonForm(props: IPersonFormProps): JSX.Element | null {

  const [ personData, setPersonData ] = React.useState<PersonData>({
    name: 'Colby',
    birthday: '1990-08-27',
    likes: []
  });

  const person = Person.fromData(personData);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setPersonData(p => ({ ...p, name: value }));
  }

  const handleChangeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setPersonData(p => ({ ...p, birthday: value }));
  }

  const greet = () => {
    person.greet();
  }

  return (
    <div>
      <form className='standard-form'>
        <div className='standard-form-row'>
          <StandardFormLabeledInput label={'Name'} name={''} value={personData.name} handleChange={handleChangeName} />
        </div>
        <div className='standard-form-row'>
          <StandardFormLabeledInput label={'Birthday'} name={''} type={'date'} value={personData.birthday} handleChange={handleChangeBirthday} />
        </div>
        <button type='button' className='standard-button' onClick={greet}>greet</button>
      </form>
    </div>
  );
}