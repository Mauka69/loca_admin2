import React, { useState } from 'react';
import { Input, FormHelperText } from '@material-ui/core';
import { useForm } from 'react-hook-form';

type FormData = {
    website_url: string;
};

const App: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [websiteUrl, setWebsiteUrl] = useState('');

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Веб сайт"
                name="website_url"
                inputProps={{ pattern: 'https?://.+', title: 'Введите корректный URL-адрес' }}
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                {...register('website_url', { required: true })}
            />
            {errors.website_url?.type === 'required' && <FormHelperText>Поле "Веб сайт" обязательно для заполнения</FormHelperText>}
            {errors.website_url?.type === 'pattern' && <FormHelperText>Введите корректный URL-адрес</FormHelperText>}
            <button type="submit">Отправить</button>
        </form>
    );
};

export default App;
