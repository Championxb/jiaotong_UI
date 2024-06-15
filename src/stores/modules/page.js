import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore(
  "page",
  () => {
    const pageType = ref(0);
    const firstPage = ref(0);
    const setPageType = (type) => {
      pageType.value = type;
    };

    const setFirstPage = (page) => {
      firstPage.value = page;
    };
    return {
      pageType: computed(() => pageType.value),
      firstPage: computed(() => firstPage.value),
      setPageType,
      setFirstPage,
    };
  },
  { persist: true }
);
