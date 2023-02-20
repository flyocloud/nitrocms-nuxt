import { reactive, toRefs } from "vue";
import { ConfigApi } from "@flyodev/nitrocms-js";
const state = reactive({
  config: false,
  loading: true
});
export const useFlyoConfig = () => {
  const fetchConfig = async () => {
    try {
      state.config = await new ConfigApi().config();
      state.loading = false;
    } catch (e) {
      console.error(e);
    }
    return state.config;
  };
  return {
    ...toRefs(state),
    fetchConfig
  };
};
