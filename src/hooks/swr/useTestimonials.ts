import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as testimonialsApi from '@/utils/api/testimonials'
import { TTestimonial, TTestimonialResponse } from '@/types/testimonials'

export const useTestimonials = () => {
  const { data, error, isLoading, mutate } = useSWR<TTestimonialResponse[], AxiosError>(
    '/testimonials',
    testimonialsApi.getTestimonial,
    {}
  )

  const addNewTestimonial = async (item: TTestimonial) => {
    try {
      const newTestimonial = await testimonialsApi.createTestimonial(item)
      if (newTestimonial && data) {
        mutate([newTestimonial, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    testimonials: data,
    isLoading,
    isError: error,
    addNewTestimonial
  }
}
