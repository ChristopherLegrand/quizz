// tests/Home.spec.js
import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
    it('renders a list of quiz topics', () => {
        const wrapper = mount(Home, {
            data() {
                return {
                    topics: [
                        { id: 1, name: 'Math' },
                        { id: 2, name: 'Science' },
                        { id: 3, name: 'History' },
                    ],
                };
            },
        });
        expect(wrapper.findAll('.quiz-topic').length).toBeGreaterThan(0);
    });
});
