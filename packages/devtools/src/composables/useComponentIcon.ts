import type { FComponent } from '@fibbojs/core'
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import { FComponentIconSet } from '../components/icons/FComponentIconSet'
import { getIconOfComponent } from '../utils/getIconOfComponent'

/**
 * useComponentIcon
 * @description A composable function to get the icon of a given component
 * @param component The component to get the icon of
 */
export function useComponentIcon(component: FComponent): Ref<FComponentIconSet> {
  const iconName = ref(FComponentIconSet.Square) as Ref<FComponentIconSet>

  onMounted(() => {
    iconName.value = getIconOfComponent(component)
  })

  return iconName
}
