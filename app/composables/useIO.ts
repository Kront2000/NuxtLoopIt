import { useIntersectionObserver } from '@vueuse/core'
import { ref, shallowRef } from 'vue'

export const useIO = () => {
  const target = ref<HTMLElement | null>(null)
    const targetIsVisible = shallowRef(false)

    const { stop } = useIntersectionObserver(
        target,
        ([entry]) => {
            if (entry?.isIntersecting) {
                targetIsVisible.value = true
                stop()
            }
        }
    )
    const setTarget = (el: any) => {
        target.value = el as HTMLElement | null
    }
    return { 
        ref: setTarget, 
        isVisible: targetIsVisible 
    }
}