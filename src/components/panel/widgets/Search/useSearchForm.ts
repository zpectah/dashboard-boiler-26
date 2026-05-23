import z from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getConfig } from '@/config';
import type { WidgetSearchEngines } from '@/types';

const searchFormSchema = z.object({
  search: z.string().min(3),
});

type ISearchForm = z.infer<typeof searchFormSchema>;

export const useSearchForm = (engine: WidgetSearchEngines) => {
  const { engines } = getConfig();

  const form = useForm<ISearchForm>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { search: '' },
  });

  const clearHandler = () => form.reset({ search: '' }, {});

  const submitHandler: SubmitHandler<ISearchForm> = (data) => {
    if (!data.search) return;

    const path = engines[engine];
    const string = data.search;
    const url = `${path}?q=${string}`;

    window.open(url, '_blank')?.focus();
  };

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
    onClear: clearHandler,
    engine,
  };
};
