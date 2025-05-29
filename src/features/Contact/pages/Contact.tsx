import { useRef } from 'react';

import type { InputRef } from '../../../types/Reftype';
import InputField from '../../Formvalidation/InputField';
import TextAreaField from '../../Formvalidation/TextAreaField';

function Contact() {
  const formRefs = useRef<Record<string, InputRef | null>>({});

  const registerRef = (name: string) => (element: InputRef | null) => {
    formRefs.current[name] = element;
  };

  return (
    <div className='flex flex-col gap-10 w-full pb-24 md:pb-10 p-10'>
      <div className='relative max-w-fit'>
        <h2 className='text-white font-bold text-4xl'>Contact</h2>
        <p className='absolute bottom-[-50%] w-[40%] h-2 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-full'></p>
      </div>
      <form className='flex flex-col gap-10 mt-5'>
        <InputField
          ref={registerRef('name')}
          id='name'
          name='name'
          label='Name'
          placeholder='Enter your name...'
          validationMode='all'
        />
        <InputField
          ref={registerRef('email')}
          id='email'
          name='email'
          label='Email'
          placeholder='Enter your email...'
          validationMode='all'
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter valid email.',
            },
          }}
        />
        <TextAreaField
          ref={registerRef('message')}
          id='message'
          name='message'
          label='Message'
          placeholder='Your Message...'
          validationMode='all'
          rows={7}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
        />
        <button
          type='submit'
          className='bg-[#2b2b2b] text-yellow-400 border-2 border-[#383838] px-10 py-4 rounded-xl font-semibold flex w-fit'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
