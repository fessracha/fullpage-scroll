import FullpageScroll from "./FullpageScroll";

const fullpageScroll = new FullpageScroll()
const wH = fullpageScroll.wheelHandler.bind(fullpageScroll)

const VueFullpageScroll = {
  install(Vue) {
    Vue.directive("fullscroll", {
      bind(el) {
        el.addEventListener("wheel", wH);
      },
    });
  },
};

export default VueFullpageScroll;
