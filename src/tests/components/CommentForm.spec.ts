//Im not an expert in writing test, which i emphasised on my second recruitment meeting. I did something here, but TBH im not sure about it :P Writing it here, because i want to be transparent with you guys ;)
import CommentForm from '@/components/CommentForm.vue';
import {describe, it, expect, vi} from 'vitest';
import {mount} from '@vue/test-utils';

const postCommentMethodMock = vi.fn();

vi.mock('@/composables/useComments', async () => {
  return {
    useComments: () => ({
      postComment: postCommentMethodMock,
      postCommentError: null,
    })
  }
})


describe('CommentForm.vue', () => {
  it('should submit form with data in it', async () => {
    const wrapper = mount(CommentForm)

    await wrapper.find('#email').setValue('adam@t-mobile.com')
    await wrapper.find('#name').setValue('adam')
    await wrapper.find('#message').setValue('magenta team')

    await wrapper.find('form').trigger('submit.prevent')

    expect(postCommentMethodMock).toHaveBeenCalled()
  })
})
